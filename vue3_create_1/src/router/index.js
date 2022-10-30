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
  console.log(to, from);
  if(to.path == '/user-details/'){
    next({name:'singleUserDetails',params:{id:53}});
  }else{
    next();
  }
 
  // next();
  // return false
});

export default router