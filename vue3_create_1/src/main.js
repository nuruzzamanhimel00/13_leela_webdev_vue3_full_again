import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL ="http://127.0.0.1:8000/api/";
axios.defaults.headers.common['himel'] = 'Hello Himel';
axios.defaults.headers.get['himel_get'] = 'Hello get request Himel';
axios.defaults.headers.post['himel_post'] = 'Hello post request Himel';

const app = createApp(App);

app.mount('#app');
