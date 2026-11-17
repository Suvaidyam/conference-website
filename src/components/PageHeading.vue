<script setup>
defineProps({ title: String, subtitle: String })
</script>

<template>
  <div class="page-heading">
    <h1 class="section-title">{{ title }}</h1>
    <p v-if="subtitle" class="lead">{{ subtitle }}</p>
    <slot />
  </div>
</template>

<style scoped>
.page-heading { margin-bottom: 32px; }
</style>
