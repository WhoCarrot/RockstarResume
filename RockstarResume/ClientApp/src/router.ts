import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Overview from "./views/Overview.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Overview",
      component: Overview
    },
    {
      path: "/Resume",
      name: "Resume",
      // route level code-splitting
      // this generates a separate chunk (Resume.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Resume" */ "./views/Resume.vue")
    }
  ]
});
