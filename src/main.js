import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

// Add the specific imported icons
library.add(faEnvelope);
library.add(faUser);
library.add(faFacebook);
library.add(faTwitter);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
