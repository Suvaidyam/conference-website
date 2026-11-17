<script setup>
import { callForPapers, themes, timeline } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <PageHeading title="Call for Papers" :subtitle="callForPapers">
        <div class="btn-row actions">
          <RouterLink to="/contact" class="btn btn-gold">Register Now</RouterLink>
          <RouterLink to="/themes" class="btn btn-outline">Submit Abstract</RouterLink>
        </div>
      </PageHeading>

      <div class="cols">
        <div class="card box">
          <h2>Important Dates</h2>
          <ol class="dates">
            <li v-for="t in timeline" :key="t.label">
              <strong>{{ t.date }}</strong>
              <span>{{ t.label }}</span>
            </li>
          </ol>
        </div>
        <div class="card box">
          <h2>Choose a Track</h2>
          <ul class="tracks">
            <li v-for="t in themes" :key="t.id">
              <RouterLink :to="`/themes/${t.slug}`">{{ t.id }}. {{ t.title }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.actions { margin-top: 28px; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.box { padding: 28px; }
h2 { margin: 0 0 16px; font-size: 1.3rem; color: var(--forest); }
ol, ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 14px; }
.dates li { display: grid; }
.dates strong { color: var(--green); }
.dates span { color: var(--muted); }
.tracks a { color: var(--forest); text-decoration: none; font-weight: 500; }
.tracks a:hover { text-decoration: underline; }
@media (max-width: 760px) { .cols { grid-template-columns: 1fr; } }
</style>
