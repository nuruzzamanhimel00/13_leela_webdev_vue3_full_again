import loginComp from '@/components/page/loginComponent.vue'
import signupComp from '@/components/page/signupComponent.vue'
import postComp from '@/components/page/postComponent.vue'

const routes = [
    { path: '/login', component: loginComp , name: 'loginComp' },
    { path: '/signup', component: signupComp , name: 'signupComp' },
    { path: '/posts', component: postComp , name: 'postComp' },
  ];
export default routes;