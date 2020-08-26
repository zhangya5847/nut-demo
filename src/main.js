import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Navbar, Button, Picker } from "@nutui/nutui";

Navbar.install(Vue);
Button.install(Vue);
Picker.install(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
