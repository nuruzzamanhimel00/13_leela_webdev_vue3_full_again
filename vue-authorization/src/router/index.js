import { createRouter, createWebHistory } from 'vue-router'
import routes from './router.js'
import store from '../store/store.js' 
import { USER_IS_AUTHONTICATED_CHECK } from '@/store/storeconstants.js'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(() => {
//   // ...
//   // console.log(store.state.auth);
// })

router.beforeEach((to, from, next) => {
  // console.log(to.meta.auth);
  if( "auth" in to.meta && to.meta.auth && !store.getters[`auth/${USER_IS_AUTHONTICATED_CHECK}`]){
    next('/login')
  }
  else if( "auth" in to.meta && !to.meta.auth && store.getters[`auth/${USER_IS_AUTHONTICATED_CHECK}`] ){
    next('/posts')
  }else{
    next();
  }
  console.log(to, to.meta.auth);
})


export default router