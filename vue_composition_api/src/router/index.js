import HomeComponent from '../components/HomeComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
const routes = [
    {
      path: '/',
      component: HomeComponent,
      name: 'HomeComponent',
    },
    {
      path: '/about',
      name: 'AboutComponent',
      component: AboutComponent,

    }
  ];

  export default routes;