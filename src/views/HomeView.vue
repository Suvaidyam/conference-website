<script setup>
import { conference } from '../data/conference'
import hero from '../assets/img/hero.jpg'
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1>{{ conference.title }}</h1>
      <p class="tagline">{{ conference.tagline }}</p>
      <p class="intro">{{ conference.intro }}</p>

      <img :src="hero" alt="A farmer walking through a natural-farming field of maize and vegetables" class="hero-img" />

      <div class="snapshot">
        <div class="snapshot-head">
          <h2>Conference Snapshot</h2>
          <div class="btn-row">
            <RouterLink to="/call-for-papers" class="btn btn-gold">Register Now</RouterLink>
            <RouterLink to="/themes" class="btn btn-outline-light">Submit Abstract</RouterLink>
          </div>
        </div>
        <dl>
          <div v-for="item in conference.snapshot" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
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
h1 {
  font-size: clamp(1.9rem, 4.5vw, 3rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  max-width: 22ch;
  margin: 0 auto 20px;
}
.tagline {
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 20px;
}
.intro { max-width: 70ch; margin: 0 auto 40px; font-size: 1.05rem; opacity: 0.95; }
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
dl { margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px 40px; }
dt { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--mint); margin-bottom: 4px; }
dd { margin: 0; font-size: 1.2rem; color: #eef3ea; }
@media (max-width: 700px) {
  .snapshot { padding: 24px; }
  dl { grid-template-columns: 1fr; }
  .hero-img { border-radius: 18px; }
}
</style>
