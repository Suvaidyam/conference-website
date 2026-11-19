import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
  { path: '/about', name: 'about', component: () => import('./views/AboutView.vue'), meta: { title: 'About' } },
  { path: '/themes', name: 'themes', component: () => import('./views/ThemesView.vue'), meta: { title: 'Themes' } },
  { path: '/themes/:slug', name: 'theme', component: () => import('./views/ThemeDetailView.vue'), meta: { title: 'Submit Abstract' } },
  { path: '/speakers', name: 'speakers', component: () => import('./views/SpeakersView.vue'), meta: { title: 'Speakers' } },
  { path: '/schedule', name: 'schedule', component: () => import('./views/ScheduleView.vue'), meta: { title: 'Conference Schedule' } },
  { path: '/call-for-papers', redirect: '/schedule' },
  { path: '/venue', name: 'venue', component: () => import('./views/VenueView.vue'), meta: { title: 'Venue & Travel' } },
  { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title} · ICNF 2027`
})

export default router
