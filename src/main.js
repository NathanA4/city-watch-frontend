import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {env} from "@/env";
import axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$PROD = env.prod;
Vue.prototype.$apiUrl = env.apiUrl;
Vue.prototype.$frontUrl = env.frontUrl;

axios.defaults.baseURL = env.apiUrl;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
