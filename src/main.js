import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Axios from 'axios'

// Add the specific imported icons
library.add(faEnvelope);
library.add(faUser);
library.add(faFacebook);
library.add(faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.prototype.$emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
Vue.prototype.$http = Axios;
Vue.prototype.devAddress =
  Vue.config.productionTip = false;

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
