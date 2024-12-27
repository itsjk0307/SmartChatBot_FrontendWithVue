import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Chat from "../components/Chat.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/chat", component: Chat },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
