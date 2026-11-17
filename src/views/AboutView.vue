<script setup>
import { about } from '../data/conference'
</script>

<template>
  <section class="org section">
    <div class="container">
      <p class="eyebrow">{{ about.organisation.eyebrow }}</p>
      <h1 class="section-title">{{ about.organisation.heading }}</h1>
      <p class="lead">{{ about.organisation.body }}</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <p class="eyebrow">{{ about.conference.eyebrow }}</p>
      <h2 class="section-title">{{ about.conference.heading }}</h2>
      <p v-for="(p, i) in about.conference.paragraphs" :key="i" class="lead para">{{ p }}</p>

      <div class="stats">
        <div v-for="s in about.stats" :key="s.label" class="stat">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.org { background: var(--sage); min-height: 360px; }
.org .eyebrow { color: var(--forest); }
.org .lead { color: #444; }
.para { margin-bottom: 20px; max-width: none; text-align: justify; }
.stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-top: 40px; }
.stat {
  background: #fff;
  border-radius: var(--radius);
  padding: 24px 28px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  display: grid;
}
.stat strong { font-size: 2.6rem; color: #4e7d32; font-weight: 700; line-height: 1.1; }
.stat span { color: var(--muted); font-size: 1.1rem; }
@media (max-width: 600px) { .stats { grid-template-columns: 1fr; gap: 16px; } .para { text-align: left; } }
</style>
