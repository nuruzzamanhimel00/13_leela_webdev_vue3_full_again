import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.js'

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history',
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  console.log('Global before each router');
  next();
  // return false
});

export default router