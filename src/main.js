import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Ensure you have installed vuetify and its dependencies
import router from './router/index';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
