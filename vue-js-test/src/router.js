// Vuex 때 처럼 create* 함수를 제공한다.
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"), // 동적 import
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/Test"),
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("@/views/Example"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
