import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';

// Create App instance
const app = createApp(App);

// Use Plugins
app.use(router);
app.use(VueScrollTo);

// Mount the app
app.mount('#app');
