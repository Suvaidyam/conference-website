<script setup>
import { contact } from '../data/conference'
</script>

<template>
  <footer class="footer">
    <section class="container">
      <h2>Contact</h2>
      <ul class="contact">
        <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
        <li><a :href="`tel:${contact.phone.replace(/[^+\d]/g, '')}`">{{ contact.phone }}</a></li>
        <li>{{ contact.address }}</li>
      </ul>
    </section>
    <div class="container bottom">
      <p>© 2026 Rythu Sadhikara Samstha &amp; IGGAARL</p>
      <p>
        Designed &amp; developed by
        <a href="https://suvaidyam.com" target="_blank" rel="noopener" class="credit">Suvaidyam</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: #d6d6d6;
  padding: 40px 0 24px;
  font-size: 0.9rem;
}
h2 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 12px;
}
.contact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 32px;
}
a { color: #d6d6d6; }
a:hover { color: var(--gold); }
.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px 24px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #2a2a2a;
  font-size: 0.8rem;
  color: #8a8a8a;
}
.bottom p { margin: 0; }
.credit { color: #d6d6d6; font-weight: 600; text-decoration: none; }
.credit:hover { color: var(--gold); text-decoration: underline; }
@media (max-width: 760px) {
  .contact { flex-direction: column; }
}
</style>
