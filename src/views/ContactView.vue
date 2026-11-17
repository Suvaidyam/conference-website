<script setup>
import { computed, reactive, ref } from 'vue'
import { contact } from '../data/conference'
import PageHeading from '../components/PageHeading.vue'

const form = reactive({ title: '', name: '', email: '', country: '', message: '' })
const sent = ref(false)
const MAX_WORDS = 200
const words = computed(() => form.message.trim().split(/\s+/).filter(Boolean).length)

function submit() {
  if (words.value > MAX_WORDS) return
  // TODO: send to backend / form service
  console.log('Contact message', { ...form })
  sent.value = true
}
</script>

<template>
  <section class="section">
    <div class="container cols">
      <div>
        <PageHeading title="Contact" subtitle="Write to us for any query" />
        <ul class="info">
          <li><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></li>
          <li>{{ contact.phone }}</li>
          <li>{{ contact.address }}</li>
        </ul>
      </div>

      <div v-if="sent" class="notice">Thank you, {{ form.name }}. We’ve received your message and will reply soon.</div>

      <form v-else class="form card panel" @submit.prevent="submit">
        <div class="row">
          <div class="field title">
            <label for="title">Title</label>
            <select id="title" v-model="form.title" required>
              <option value="" disabled>Select</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
              <option>Dr.</option>
              <option>Prof.</option>
            </select>
          </div>
          <div class="field">
            <label for="cname">Name</label>
            <input id="cname" v-model="form.name" required autocomplete="name" />
          </div>
        </div>
        <div class="field">
          <label for="cemail">Email</label>
          <input id="cemail" v-model="form.email" type="email" required autocomplete="email" />
        </div>
        <div class="field">
          <label for="country">Country</label>
          <input id="country" v-model="form.country" required autocomplete="country-name" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="7" required />
          <span class="hint" :class="{ error: words > MAX_WORDS }">{{ words }} / {{ MAX_WORDS }} words</span>
        </div>
        <div class="btn-row">
          <button type="submit" class="btn btn-green" :disabled="words > MAX_WORDS">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.cols { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; align-items: start; }
.info { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; color: var(--muted); }
.panel { padding: 32px; }
.row { display: grid; grid-template-columns: 140px 1fr; gap: 16px; }
@media (max-width: 760px) {
  .cols { grid-template-columns: 1fr; gap: 24px; }
  .panel { padding: 20px; }
  .row { grid-template-columns: 1fr; }
}
</style>
