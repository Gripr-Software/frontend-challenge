import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./helpers/registerAppComponents";
import store from "./store";
import { axiosAuthSetup } from "./helpers/interceptors";
axiosAuthSetup();

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
