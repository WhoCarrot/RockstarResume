import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

// Import Bootstrap-Vue components
import {
  ButtonPlugin,
  CardPlugin,
  TabsPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin
} from "bootstrap-vue";

Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(TabsPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
