/**
 * \version  0.1.0
 * \author   Richard Poulson
 * \date     2019-08-06
 *
 * \see https://vuejs.org/v2/guide/instance.html
 * \see https://vuejs.org/v2/api/#Vue-use
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router"; // Install plugin, return customized VueRouter
import vuetify from "./plugins/vuetify"; // Install plugin, return customized Vuetify
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
