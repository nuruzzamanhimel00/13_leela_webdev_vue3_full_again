import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index.js'

import { createRouter, createWebHistory } from 'vue-router'
import routes from '../src/router/index.js'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

import GlobalMixins from '../src/Mixins/Global.mixins.js'

const app = createApp(App);
app.use(router);
// Install the store instance as a plugin
app.use(store)
app.mixin(GlobalMixins)
app.mount('#app');
