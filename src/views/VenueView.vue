<script setup>
import { venue, conference } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'

const venueName = conference.snapshot.details.find((s) => s.label === 'Venue').value
</script>

<template>
  <section class="section">
    <div class="container">
      <PageHeading title="Venue and Travel" :subtitle="venue.intro" />

      <div class="cols">
        <div>
          <h2>Venue</h2>
          <p class="venue-name">{{ venueName }}</p>
          <p class="address">{{ venue.address }}</p>
        </div>
        <div>
          <h2>Map</h2>
          <iframe
            class="map"
            title="Map: Anandapuram Mandal, Gambhiram, Andhra Pradesh 531163"
            src="https://maps.google.com/maps?q=Anandapuram%20Mandal%2C%20Gambhiram%2C%20Andhra%20Pradesh%20531163&z=14&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cols { display: grid; grid-template-columns: 1fr 1.6fr; gap: 40px; align-items: start; }
h2 { color: var(--forest-2); font-size: 1.6rem; margin: 0 0 12px; }
.venue-name { font-weight: 500; margin: 0 0 16px; }
.address { margin: 0; color: var(--muted); }
.map { display: block; width: 100%; aspect-ratio: 4 / 3; border-radius: 12px; border: 1px solid #ddd; }
@media (max-width: 760px) { .cols { grid-template-columns: 1fr; } }
</style>
