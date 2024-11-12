import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";

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
      path: "/main-page",
      name: "main-page",
      component: () => import("../pages/home-page.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "/courses",
          name: "courses",
          component: () => import("../pages/courses/courses-page.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("../pages/profile/profile.vue"),
        },
        {
          path: "/settings",
          name: "settings",
          component: () => import("../pages/settings/settings.vue"),
        },
        {
          path: "/matrix",
          name: "matrix",
          component: () => import("../pages/matrix/matrix-page.vue"),
        },
      ],
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
