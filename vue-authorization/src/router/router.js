import loginComp from '@/components/page/loginComponent.vue'
import signupComp from '@/components/page/signupComponent.vue'

const routes = [
    { path: '/login', component: loginComp , name: 'loginComp' },
    { path: '/signup', component: signupComp , name: 'signupComp' },
  ];
export default routes;