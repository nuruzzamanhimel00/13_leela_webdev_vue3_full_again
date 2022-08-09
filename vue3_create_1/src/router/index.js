import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.js'

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})
export default router