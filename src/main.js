// IMPORTS
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// CREATE APP
createApp(App).use(store).use(router).mount('#app');
