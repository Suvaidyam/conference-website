<script setup>
import { conference } from '../data/conference'
import hero from '../assets/img/hero.jpg'
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <h1>{{ conference.title }}</h1>
      <p class="tagline">{{ conference.tagline }}</p>

      <div class="hosts">
        <div class="host">
          <span class="host-label">Hosted by</span>
          <strong class="host-name">{{ conference.hostedBy.name }}</strong>
          <span class="host-detail">({{ conference.hostedBy.detail }})</span>
        </div>
        <div class="host">
          <span class="host-label">Co-organised by</span>
          <strong class="host-name">{{ conference.coOrganisedBy.lead }}</strong>
          <ul class="partners">
            <li v-for="p in conference.coOrganisedBy.others" :key="p">{{ p }}</li>
          </ul>
        </div>
      </div>

      <p class="intro">{{ conference.intro }}</p>
    </div>
    <div class="container">

      <img :src="hero" alt="A farmer walking through a natural-farming field of maize and vegetables" class="hero-img" />

      <div class="snapshot">
        <div class="snapshot-head">
          <h2>Conference Snapshot</h2>
        </div>
        <div class="snapshot-body">
          <ol class="key-dates" aria-label="Key dates">
            <li v-for="item in conference.snapshot.dates" :key="item.date">
              <span class="kd-date">{{ item.date }}</span>
              <span class="kd-label">{{ item.label }}</span>
            </li>
          </ol>
          <dl>
            <div v-for="item in conference.snapshot.details" :key="item.label">
              <dt>{{ item.label }}</dt>
              <dd>{{ item.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--forest);
  color: #fff;
  padding: 56px 0 72px;
  text-align: center;
}
/* Title, tagline and intro each sit on one line on wide screens and wrap below that. */
.hero-text { padding-inline: 24px; }
h1 {
  font-size: clamp(1.9rem, 2.55vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0 auto 20px;
}
.tagline {
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 20px;
}
.hosts {
  display: grid;
  gap: 18px;
  max-width: 900px;
  margin: 0 auto 28px;
  padding: 22px 28px;
  border: 1px solid #4a7d40;
  border-radius: 20px;
  background: var(--forest-2);
}
.host { display: grid; gap: 4px; justify-items: center; }
.host + .host { padding-top: 18px; border-top: 1px solid #4a7d40; }
.host-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--mint);
}
.host-name { font-size: 1.25rem; font-weight: 600; }
.host-detail { font-size: 0.95rem; opacity: 0.85; max-width: 60ch; }
.partners {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
}
.partners li {
  padding: 3px 14px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.intro { max-width: 70ch; margin: 0 auto 40px; font-size: 1.05rem; opacity: 0.95; }
@media (min-width: 1200px) {
  h1, .tagline, .intro { white-space: nowrap; }
  .intro { max-width: none; font-size: clamp(0.85rem, 1.05vw, 1.1rem); }
}
.hero-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 28px;
}
.snapshot {
  margin-top: 36px;
  padding: 36px 44px;
  border-radius: 28px;
  background: var(--forest-2);
  border: 1px solid #4a7d40;
  text-align: left;
}
.snapshot-head {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
h2 { margin: 0; font-size: 1.5rem; }
.snapshot-body { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 48px; }
.key-dates {
  margin: 0;
  padding: 20px 24px;
  list-style: none;
  display: grid;
  gap: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #4a7d40;
}
.key-dates li {
  position: relative;
  display: grid;
  gap: 2px;
  padding-left: 26px;
}
/* Timeline dot + connecting line */
.key-dates li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 0 4px rgba(248, 198, 70, 0.2);
}
.key-dates li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 22px;
  bottom: -18px;
  width: 2px;
  background: rgba(248, 198, 70, 0.35);
}
.kd-date { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.04em; color: var(--mint); }
.kd-label { font-size: 1.15rem; color: #fff; }
dl { margin: 0; display: grid; gap: 22px; align-content: start; }
dt { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--mint); margin-bottom: 4px; }
dd { margin: 0; font-size: 1.2rem; color: #eef3ea; }
@media (max-width: 700px) {
  .snapshot { padding: 24px; }
  .snapshot-body { grid-template-columns: 1fr; }
  .hero-img { border-radius: 18px; }
}
</style>
