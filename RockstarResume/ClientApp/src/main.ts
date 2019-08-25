import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

// Global components
import globalComponents from '@/components/global';
globalComponents.forEach(component => {
  Vue.component(component.name, component);
});

// Create Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
