import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import i18n from './i18n'

import SolidPlugin from './plugins/solid-plugin';
Vue.use(SolidPlugin, {store: store});
import OdPlugin from './plugins/od-plugin';
Vue.use(OdPlugin, {store: store});

import VueGun from 'vue-gun';
Vue.use(VueGun, {
   //gun: gun, // must be passed in at `gun` key
   peers: ['https://spogg.herokuapp.com/gun',/*'http://localhost:9090/gun',*/ 'https://gun-manhattan.herokuapp.com/gun'/*, 'http://gunjs.herokuapp.com/gun/'*/] // run gun-starter-app on port 9090
});

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
