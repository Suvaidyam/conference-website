<script setup>
import { venue, conference } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'
import mapImg from '../assets/img/map.png'

const venueName = conference.snapshot.find((s) => s.label === 'Venue').value
</script>

<template>
  <section class="section">
    <div class="container">
      <PageHeading title="Venue and Travel" :subtitle="venue.intro" />

      <div class="cols">
        <div>
          <h2>Venue</h2>
          <p class="venue-name">{{ venueName }}</p>
          <dl>
            <div v-for="d in venue.details" :key="d.label">
              <dt>{{ d.label }}:</dt>
              <dd>{{ d.value || '—' }}</dd>
            </div>
          </dl>
        </div>
        <div>
          <h2>Map</h2>
          <img :src="mapImg" alt="Map of the area around the conference venue" class="map" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cols { display: grid; grid-template-columns: 1fr 1.6fr; gap: 40px; align-items: start; }
h2 { color: var(--forest-2); font-size: 1.6rem; margin: 0 0 12px; }
.venue-name { font-weight: 500; margin: 0 0 16px; }
dl { margin: 0; display: grid; gap: 8px; }
dl div { display: flex; gap: 8px; }
dt { font-weight: 500; }
dd { margin: 0; color: var(--muted); }
.map { width: 100%; border-radius: 12px; border: 1px solid #ddd; }
@media (max-width: 760px) { .cols { grid-template-columns: 1fr; } }
</style>
