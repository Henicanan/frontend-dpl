export default [
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
  {
    path: "/main-page",
    name: "main-page",
    component: () => import("../pages/main/main-page.vue"),
  },
];
