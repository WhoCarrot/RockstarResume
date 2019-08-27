import Vue from "vue";

// https://vuex.vuejs.org/
import Vuex from "vuex";
Vue.use(Vuex);

import createPersistedState from "vuex-persistedstate";

// Vuex ORM
// https://github.com/vuex-orm/vuex-orm
import { VuexORM, database } from "./vuexORM";

// https://github.com/davestewart/vuex-pathify
// optional configuration
import pathify from "./pathify";
pathify.debug();

import resume from "@/store/modules/resumeModule";

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    resume
  },
  strict: debug,
  plugins: [
    VuexORM.install(database),
    createPersistedState({ storage: window.sessionStorage }),
    pathify.plugin
  ]
});
