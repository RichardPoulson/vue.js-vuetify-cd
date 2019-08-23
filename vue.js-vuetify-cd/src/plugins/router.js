import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: ( "hash" | "history" | "abstract" )
  //   https://router.vuejs.org/api/#mode
  base: __dirname,
  routes: [
    {
      path: '/', name: "home", component: () =>
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        import(/* webpackChunkName: "home" */ "../views/Home.vue")
    },
    {
      path: '/education', name: "education", component: () =>
        import("../views/EducationHistory.vue")
    },
    {
      path: '/work', name: "work", component: () =>
        import("../views/WorkHistory.vue")
    },
    {
      path: '/projects', name: "projects", component: () =>
        import("../views/Projects.vue")
    }
  ]
});
