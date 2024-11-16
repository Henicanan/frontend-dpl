export default [
  {
    path: "dashboard",
    name: "admin-dashboard",
    component: () => import("../pages/admin/components/dashboard/dashboard.vue"),
  },
  {
    path: "moderators",
    name: "admin-moderators",
    component: () => import("../pages/admin/components/moderators/moderators.vue"),
  },
  {
    path: "students",
    name: "admin-students",
    component: () => import("../pages/admin/components/students/students.vue"),
  },
];
