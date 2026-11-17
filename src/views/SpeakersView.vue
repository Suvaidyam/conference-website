<script setup>
import { speakers, speakersIntro } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <PageHeading title="Speakers" :subtitle="speakersIntro" />
      <ul class="grid">
        <li v-for="s in speakers" :key="s.id" class="card speaker">
          <img v-if="s.photo" :src="s.photo" :alt="s.name" class="photo" />
          <div v-else class="photo placeholder" aria-hidden="true">Photo</div>
          <h3>{{ s.name }}</h3>
          <p>{{ s.bio }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  list-style: none; margin: 0; padding: 0;
  display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;
}
.speaker { padding: 24px 20px 28px; text-align: center; }
.photo {
  width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 18px;
  object-fit: cover; border: 1px solid var(--border);
}
.placeholder { display: grid; place-items: center; background: var(--mint-soft); color: #555; font-size: 1.4rem; }
h3 { margin: 0 0 4px; font-size: 1.15rem; color: #444; }
p { margin: 0; color: var(--muted); }
</style>
