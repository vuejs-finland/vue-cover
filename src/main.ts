import { createApp } from 'vue';
// import Buefy from 'buefy';
// import 'buefy/dist/buefy.css'

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
// app.use(Buefy); // does not work, maybe because it still support only vue 2?

app.mount('#app')
