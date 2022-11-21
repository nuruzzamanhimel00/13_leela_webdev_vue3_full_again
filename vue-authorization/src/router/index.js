import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.js'
import store from '../store/store.js'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  console.log('for ever router =',store.state.auth.myname);
  
})

export default router