<script setup>
import { themes } from '../data/conference'
import ThemeCard from '../components/ThemeCard.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="center head">
        <p class="eyebrow">Conference Tracks</p>
        <h1 class="section-title">Key Themes &amp; Knowledge Streams</h1>
        <p class="lead">
          Interdisciplinary sessions exploring science, practice, policy, economics, and community-led innovations in
          agroecology.
        </p>
      </div>
      <div class="list">
        <ThemeCard v-for="t in themes" :key="t.id" :theme="t" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.head { margin-bottom: 32px; }
.list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
@media (max-width: 760px) { .list { grid-template-columns: 1fr; } }
</style>
