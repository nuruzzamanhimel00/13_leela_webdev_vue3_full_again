import loginComp from '@/components/page/loginComponent.vue'
import signupComp from '@/components/page/signupComponent.vue'
import store from '../store/store.js'

const routes = [
    { path: '/login', component: loginComp , name: 'loginComp' ,beforeEnter: () => {
      console.log('par route =',store.state.auth.myname);
    }, },
    { path: '/signup', component: signupComp , name: 'signupComp' },
  ];
export default routes;