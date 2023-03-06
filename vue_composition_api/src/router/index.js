import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import PostPage from '../pages/PostPage.vue'
import ArticlePage from '../pages/ArticlePage.vue'
import CounterPage from '../pages/CounterPage.vue'
const routes = [
    {
      path: '/',
      component: HomePage,
      name: 'HomeComponent',
    },
    {
      path: '/about',
      name: 'AboutComponent',
      component: AboutPage,

    },
    {
      path: '/counter',
      name: 'CounterPage',
      component: CounterPage,

    },
    {
      path: '/post/:id',
      component: PostPage,
      name: 'PostPage',

    },
    {
      path: '/article/:id',
      component: ArticlePage,
      name: 'ArticlePage',
      props: true

    },
  ];

  export default routes;