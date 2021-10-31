import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import VAnimateCss from 'v-animate-css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(Loading);
Vue.component('v-icon', Icon)
Vue.use(VAnimateCss);
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: function (h) { return h(App) }
}).$mount('#app')
