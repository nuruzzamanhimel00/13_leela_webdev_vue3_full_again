import loginComp from '@/components/page/loginComponent.vue'
import signupComp from '@/components/page/signupComponent.vue'
import postComp from '@/components/page/postComponent.vue'
import hompComp from '@/components/page/homeComponent.vue'

const routes = [
    { path: '/login', component: loginComp , name: 'loginComp' },
    { path: '/signup', component: signupComp , name: 'signupComp' },
    { path: '/posts', component: postComp , name: 'postComp' },
    { path: '/home', component: hompComp , name: 'hompComp' },
  ];
export default routes;