<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '../data/conference'
import ryss from '../assets/img/ryss.png'
import iggaarl from '../assets/img/iggaarl.png'
import apGov from '../assets/img/ap-gov.png'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="header">
    <div class="container logos">
      <img :src="ryss" alt="Rythu Sadhikara Samstha" class="logo logo-round" />
      <RouterLink to="/" aria-label="Home"><img :src="iggaarl" alt="IGGAARL – Indo-German Global Academy for Agroecology Research and Learning" class="logo logo-wide" /></RouterLink>
      <img :src="apGov" alt="Government of Andhra Pradesh" class="logo logo-round" />
    </div>

    <nav class="container nav" aria-label="Main">
      <button class="menu-toggle" :aria-expanded="open" @click="open = !open">
        <span>Menu</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path v-if="!open" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <ul :class="{ open }">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink :to="link.to" :class="{ active: link.to !== '/' && route.path.startsWith(link.to) }">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 12px;
}
.logo-round { height: 84px; width: auto; }
.logo-wide { height: 64px; width: auto; }

.nav { padding-bottom: 12px; }
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}
.nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 4px 8px;
  border-radius: 6px;
  background: var(--green);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.15;
  text-decoration: none;
  transition: background 0.15s;
}
.nav a:hover { background: var(--green-dark); }
.nav a.router-link-exact-active,
.nav a.active { background: var(--forest); box-shadow: inset 0 -3px 0 var(--gold); }

.menu-toggle {
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border: 0;
  border-radius: 6px;
  background: var(--green);
  color: #fff;
  font: inherit;
  font-weight: 500;
  cursor: pointer;
}

@media (max-width: 760px) {
  .logo-round { height: 56px; }
  .logo-wide { height: 44px; }
  .menu-toggle { display: flex; }
  .nav ul { display: none; grid-template-columns: 1fr; margin-top: 8px; }
  .nav ul.open { display: grid; }
}
</style>
