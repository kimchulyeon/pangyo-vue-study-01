import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/job",
      component: () => import("@/views/job/Job.vue"),
    },
    {
      path: "/news",
      component: () => import("@/views/news/News.vue"),
    },
    {
      path: "/ask",
      component: () => import("@/views/ask/Ask.vue"),
    },
  ],
});

export default router;
