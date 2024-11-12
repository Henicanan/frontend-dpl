import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import homePageRoutes from "./homePageRoutes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/auth",
    },
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
      path: "/home-page",
      name: "home-page",
      component: () => import("../pages/home-page.vue"),
      meta: { requiresAuth: true },
      children: homePageRoutes,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthorizated) {
    next("/auth");
  } else {
    next();
  }
});
