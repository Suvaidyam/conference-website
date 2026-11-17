<script setup>
import { contact, timeline, organisers, coOrganisers } from '../data/conference'
</script>

<template>
  <footer class="footer">
    <div class="container grid">
      <section>
        <h2>Important Dates</h2>
        <ol class="timeline">
          <li v-for="item in timeline" :key="item.label">
            <span class="date">{{ item.date }}</span>
            <span>{{ item.label }}</span>
          </li>
        </ol>
      </section>

      <section>
        <h2>Organisers</h2>
        <ul><li v-for="o in organisers" :key="o">{{ o }}</li></ul>
        <h2 class="mt">Co-organisers</h2>
        <ul><li v-for="o in coOrganisers" :key="o">{{ o }}</li></ul>
      </section>

      <section>
        <h2>Contact</h2>
        <ul>
          <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li><a :href="`tel:${contact.phone.replace(/[^+\d]/g, '')}`">{{ contact.phone }}</a></li>
          <li>{{ contact.address }}</li>
        </ul>
      </section>
    </div>
    <p class="container copy">© 2026 Rythu Sadhikara Samstha &amp; IGGAARL</p>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: #d6d6d6;
  padding: 48px 0 24px;
  font-size: 0.9rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr 1fr;
  gap: 40px;
}
h2 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 12px;
}
.mt { margin-top: 20px; }
ul, ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
a { color: #d6d6d6; }
a:hover { color: var(--gold); }
.timeline li { display: grid; gap: 2px; }
.timeline .date { color: var(--mint); font-weight: 600; }
.copy { margin-top: 40px; padding-top: 20px; border-top: 1px solid #2a2a2a; font-size: 0.8rem; color: #8a8a8a; }
@media (max-width: 760px) {
  .grid { grid-template-columns: 1fr; gap: 28px; }
}
</style>
