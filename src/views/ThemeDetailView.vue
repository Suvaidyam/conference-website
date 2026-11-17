<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { themes } from '../data/conference'

const route = useRoute()
const theme = computed(() => themes.find((t) => t.slug === route.params.slug))

const form = reactive({ name: '', email: '', link: '', abstract: '' })
const submitted = ref(false)
const MAX_WORDS = 300
const words = computed(() => form.abstract.trim().split(/\s+/).filter(Boolean).length)

function submit() {
  if (words.value > MAX_WORDS) return
  // TODO: send to backend / form service
  console.log('Abstract submission', { theme: theme.value.title, ...form })
  submitted.value = true
}
</script>

<template>
  <section class="section">
    <div class="container narrow">
      <RouterLink to="/themes" class="back">&lt; Back</RouterLink>

      <template v-if="theme">
        <span class="num">{{ theme.id }}</span>
        <h1 class="section-title">{{ theme.title }}</h1>
        <p class="lead">{{ theme.subtitle }}</p>

        <div v-if="submitted" class="notice mt">
          Thank you! Your abstract for “{{ theme.title }}” has been received. We’ll be in touch at {{ form.email }}.
        </div>

        <form v-else class="form card panel" @submit.prevent="submit">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model="form.name" required autocomplete="name" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required autocomplete="email" />
          </div>
          <div class="field">
            <label for="link">Link</label>
            <input id="link" v-model="form.link" type="url" placeholder="https://" />
            <span class="hint">Optional link to a full paper, dataset, or supporting material.</span>
          </div>
          <div class="field">
            <label for="abstract">Abstract</label>
            <textarea id="abstract" v-model="form.abstract" rows="10" required />
            <span class="hint" :class="{ error: words > MAX_WORDS }">{{ words }} / {{ MAX_WORDS }} words</span>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-green" :disabled="words > MAX_WORDS">Submit</button>
          </div>
        </form>
      </template>

      <p v-else class="lead">Theme not found. <RouterLink to="/themes">See all themes</RouterLink>.</p>
    </div>
  </section>
</template>

<style scoped>
.narrow { max-width: 820px; }
.back { display: inline-block; margin-bottom: 24px; color: var(--green); text-decoration: none; font-weight: 500; }
.num {
  display: inline-grid; place-items: center; width: 48px; height: 48px; border-radius: 10px;
  background: var(--mint-soft); color: var(--forest); font-size: 1.3rem; margin-bottom: 12px;
}
.panel { margin-top: 32px; padding: 32px; }
.mt { margin-top: 32px; }
@media (max-width: 600px) { .panel { padding: 20px; } }
</style>
