import Vue from "vue";
import Vuex from "vuex";
import pathify from "vuex-pathify";

import resume from "@/store/modules/resume";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    resume,
  },
  strict: debug,
  plugins: [pathify.plugin]
});
