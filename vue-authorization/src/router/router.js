// import loginComp from '@/components/page/loginComponent.vue'
// import signupComp from '@/components/page/signupComponent.vue'
// import postComp from '@/components/page/postComponent.vue'
// import hompComp from '@/components/page/homeComponent.vue'

//Optimize Routes by Lazy Loading Components
const loginComp = import(/*webpackChunkname: login*/'@/components/page/loginComponent.vue');
const signupComp = import('@/components/page/signupComponent.vue');
const postComp = import('@/components/page/postComponent.vue');
const hompComp = import('@/components/page/homeComponent.vue');

const routes = [
    { path: '/home', component: hompComp , name: 'hompComp' },
    { path: '/login', component: loginComp , name: 'loginComp', meta:{auth: false} },
    { path: '/signup', component: signupComp , name: 'signupComp', meta:{auth: false} },
    { path: '/posts', component: postComp , name: 'postComp', meta:{auth: true} },

  ];
export default routes;