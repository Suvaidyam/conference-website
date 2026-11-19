<script setup>
import { ref, computed } from 'vue'
import { schedule } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'

const active = ref(0)
const day = computed(() => schedule.days[active.value])

// The first column (Auditorium) holds the plenary programme; the rest are parallel halls.
const kind = (i) => (i === 0 ? 'featured' : 'session')
const filled = (row) =>
  row.cells.map((cell, i) => cell && { ...cell, hall: schedule.halls[i], kind: kind(i) }).filter(Boolean)
</script>

<template>
  <section class="section">
    <div class="container">
      <PageHeading
        title="Conference Schedule"
        subtitle="Two days of plenaries and parallel sessions across the auditorium and five halls."
      />

      <div class="toolbar">
        <div class="tabs" role="tablist" aria-label="Conference days">
          <button
            v-for="(d, i) in schedule.days"
            :key="d.label"
            role="tab"
            :aria-selected="active === i"
            :class="['tab', { on: active === i }]"
            @click="active = i"
          >
            <span class="tab-day">{{ d.label }}</span>
            <span class="tab-date long">{{ d.date }}</span>
            <span class="tab-date short">{{ d.shortDate }}</span>
          </button>
        </div>
        <ul class="legend" aria-label="Legend">
          <li><i class="dot featured" />Plenary &amp; ceremonies</li>
          <li><i class="dot session" />Parallel sessions</li>
          <li><i class="dot break" />Breaks</li>
        </ul>
      </div>

      <!-- Desktop: grid of time × venue -->
      <div class="grid-wrap" role="tabpanel">
        <table class="grid">
          <thead>
            <tr>
              <th scope="col" class="time-col">Time</th>
              <th v-for="hall in schedule.halls" :key="hall" scope="col">{{ hall }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in day.rows" :key="row.time">
              <th scope="row" class="time">{{ row.time }}</th>
              <td v-if="row.span" :colspan="schedule.halls.length">
                <div class="slot break">{{ row.span }}</div>
              </td>
              <template v-else>
                <td v-for="(cell, i) in row.cells" :key="i">
                  <div v-if="cell" :class="['slot', kind(i)]">
                    <span class="title">{{ cell.title }}</span>
                    <template v-if="'link' in cell">
                      <a v-if="cell.link" :href="cell.link" target="_blank" rel="noopener" class="watch">
                        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l7-4.5z" /></svg>View session
                      </a>
                      <span v-else class="watch pending">Link coming soon</span>
                    </template>
                  </div>
                  <div v-else class="slot empty" aria-label="No session" />
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile: agenda list -->
      <ol class="agenda">
        <li v-for="row in day.rows" :key="row.time" class="agenda-row">
          <span class="agenda-time">{{ row.time }}</span>
          <div class="agenda-items">
            <div v-if="row.span" class="slot break">{{ row.span }}</div>
            <template v-else>
              <div v-for="cell in filled(row)" :key="cell.hall" :class="['slot', cell.kind]">
                <span class="hall">{{ cell.hall }}</span>
                <span class="title">{{ cell.title }}</span>
                <template v-if="'link' in cell">
                  <a v-if="cell.link" :href="cell.link" target="_blank" rel="noopener" class="watch">
                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l7-4.5z" /></svg>View session
                  </a>
                  <span v-else class="watch pending">Link coming soon</span>
                </template>
              </div>
            </template>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
/* Toolbar: day tabs + legend */
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px 24px;
  margin-bottom: 24px;
}
.tabs {
  display: inline-flex;
  gap: 6px;
  padding: 6px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
}
.tab {
  display: grid;
  gap: 2px;
  padding: 10px 20px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--forest);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.tab:hover { background: var(--leaf-tint); }
.tab.on { background: var(--forest); color: #fff; }
.tab-day { font-weight: 700; font-size: 1.05rem; }
.tab-date { font-size: 0.8rem; opacity: 0.8; }
.tab-date.short { display: none; }
.tab:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
  color: var(--muted);
}
.legend li { display: flex; align-items: center; gap: 8px; }
.dot { width: 12px; height: 12px; border-radius: 4px; display: inline-block; }
.dot.featured { background: #fdf0cc; border: 1px solid var(--gold); }
.dot.session { background: #fff; border: 1px solid var(--green); }
.dot.break { background: var(--leaf-tint); border: 1px dashed #9db58c; }

/* Desktop grid */
.grid-wrap {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 8px;
  overflow-x: auto;
  box-shadow: 0 6px 24px rgba(34, 84, 44, 0.06);
}
.grid {
  width: 100%;
  min-width: 860px;
  border-collapse: separate;
  border-spacing: 6px;
  table-layout: fixed;
}
.grid thead th {
  padding: 12px 8px;
  border-radius: 10px;
  background: var(--forest);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.grid .time-col { width: 76px; background: var(--forest-2); }
.grid td { padding: 0; height: 1px; }
.time {
  color: var(--forest);
  font-weight: 700;
  font-size: 0.95rem;
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
}

/* Slots (shared by grid + agenda) */
.slot {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  min-height: 64px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 1.3;
}
.slot.session {
  background: #fff;
  border: 1px solid #b9d3a8;
  border-top: 3px solid var(--green);
  transition: transform 0.12s, box-shadow 0.12s;
}
.slot.session:hover { transform: translateY(-2px); box-shadow: 0 6px 14px rgba(4, 127, 44, 0.12); }
.slot.featured {
  background: #fdf0cc;
  border: 1px solid var(--gold);
  border-top: 3px solid var(--gold);
}
.slot.break {
  min-height: 48px;
  background: repeating-linear-gradient(135deg, var(--leaf-tint) 0 10px, #e3eddb 10px 20px);
  border: 1px dashed #9db58c;
  color: var(--forest);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.slot.empty { border: 1px dashed #e2e8dc; }
.title { font-weight: 600; color: var(--forest); }
.watch {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--green);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
}
.watch:hover { background: var(--green-dark); }
.watch svg { width: 12px; height: 12px; fill: currentColor; }
.watch.pending { background: transparent; color: var(--muted); padding: 0; font-weight: 400; }

/* Mobile agenda */
.agenda { display: none; margin: 0; padding: 0; list-style: none; }

@media (max-width: 820px) {
  .grid-wrap { display: none; }
  .agenda { display: grid; gap: 18px; }
  .tabs { display: flex; width: 100%; }
  .tab { flex: 1; }
  .agenda-row {
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 12px;
  }
  .agenda-time {
    padding-top: 10px;
    color: var(--forest);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
  .agenda-items { display: grid; gap: 8px; border-left: 2px solid var(--border); padding-left: 12px; min-width: 0; }
  .agenda .slot { align-items: flex-start; text-align: left; min-height: 0; gap: 2px; padding: 8px 12px; }
  .tab-date.long { display: none; }
  .tab-date.short { display: inline; }
  .hall { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
}
</style>
