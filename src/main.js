import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from "./layouts/App.vue";
import router from './router/index.js';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
