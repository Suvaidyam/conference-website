<script setup>
defineProps({ theme: { type: Object, required: true } })
</script>

<template>
  <RouterLink :to="`/themes/${theme.slug}`" class="card theme-card">
    <span class="num">{{ theme.id }}</span>
    <h3>{{ theme.title }}</h3>
    <p>{{ theme.subtitle }}</p>
    <span class="cta">Submit abstract →</span>
  </RouterLink>
</template>

<style scoped>
.theme-card {
  display: block;
  padding: 28px 36px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
}
.theme-card:hover { box-shadow: 0 8px 24px rgba(34, 84, 44, 0.12); transform: translateY(-2px); }
.num {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: var(--mint-soft);
  font-size: 1.3rem;
  color: var(--forest);
}
h3 { font-size: 1.5rem; margin: 18px 0 6px; color: #444; }
p { margin: 0; color: var(--muted); }
.cta { display: inline-block; margin-top: 14px; color: var(--green); font-weight: 500; font-size: 0.95rem; }
@media (max-width: 600px) { .theme-card { padding: 22px; } }
</style>
