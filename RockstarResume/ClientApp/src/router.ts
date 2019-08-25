import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "./views/Overview.vue";
import Resume from "./views/Resume.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "Overview",
      component: Overview
    },
    {
      path: "/Resume/:Id",
      name: "Resume",
      props: true,
      component: Resume
    },
    { path: "*", redirect: "/" }
  ]
});
