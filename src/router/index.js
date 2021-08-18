import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import TaskPage from "../pages/TaskPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
