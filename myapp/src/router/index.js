import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mybooks",
    name: "mybooks",
    component: () => import("../views/MyBooksView.vue"),
  },
  {
    path: "/mybooks/:id",
    name: "mybookpage",
    props: true,
    component: () => import("../views/MyBookPageView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
