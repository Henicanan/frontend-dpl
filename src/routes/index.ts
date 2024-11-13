import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import homePageRoutes from "./homePageRoutes";
import adminPageRoutes from "./adminPageRoutes";
import ROUTES from "./routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: ROUTES.auth,
    },
    {
      path: ROUTES.auth,
      name: "auth",
      component: () => import("../pages/auth/sign-in-page.vue"),
    },
    {
      path: ROUTES.registration,
      name: "registration",
      component: () => import("../pages/auth/registration-page.vue"),
    },
    {
      path: ROUTES.homePage,
      name: "home-page",
      component: () => import("../pages/home-page.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          redirect: "/main-page",
        },
        ...homePageRoutes,
      ],
    },
    {
      path: ROUTES.authAdmin,
      name: "auth-admin",
      component: () => import("../pages/admin/auth-admin.vue"),
    },
    {
      path: ROUTES.adminPanel,
      name: "admin-panel",
      component: () => import("../pages/admin/admin-page.vue"),
      meta: { requiresAdmin: true },
      children: adminPageRoutes,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthorizated) {
    return next(ROUTES.auth);
  }

  if (to.meta.requiresAdmin && authStore.userRole !== "admin") {
    return next(ROUTES.authAdmin);
  }

  next();
});
