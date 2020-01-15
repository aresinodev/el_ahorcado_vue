import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import i18n from "@/plugins/i18n";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Global css
import '@/styles.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
