import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from '../src/router/index.js'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');
