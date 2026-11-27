<script setup>
defineProps({ theme: { type: Object, required: true } })
</script>

<template>
  <div class="card theme-card">
    <span class="num">{{ theme.id }}</span>
    <h3>{{ theme.title }}</h3>
    <p>{{ theme.subtitle }}</p>
  </div>
</template>

<style scoped>
.theme-card {
  display: block;
  padding: 28px 36px;
}
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
@media (max-width: 600px) { .theme-card { padding: 22px; } }
</style>
