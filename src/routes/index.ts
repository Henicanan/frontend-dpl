import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("../pages/auth/sign-in-page.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () => import("../pages/auth/registration-page.vue"),
    },
    {
      path: "/main-page",
      name: "main-page",
      component: () => import("../pages/main-page.vue"),
    },
  ],
});
