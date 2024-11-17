export default [
  {
    path: "dashboard",
    name: "admin-dashboard",
    component: () =>
      import("../pages/admin/components/dashboard/dashboard.vue"),
  },
  {
    path: "moderators",
    name: "admin-moderators",
    component: () =>
      import("../pages/admin/components/moderators/moderators.vue"),
  },
  {
    path: "students",
    name: "admin-students",
    component: () => import("../pages/admin/components/students/students.vue"),
  },
  {
    path: "courses",
    children: [
      {
        path: "",
        name: "admin-courses",
        component: () =>
          import("../pages/admin/components/dashboard/courses/courses.vue"),
      },
      {
        path: "create",
        name: "admin-create-course",
        component: () =>
          import(
            "../pages/admin/components/dashboard/courses/create-course/create-course.vue"
          ),
      },
      {
        path: ":id",
        name: "admin-course-details",
        component: () =>
          import(
            "../pages/admin/components/dashboard/courses/course-details/course-details.vue"
          ),
        props: true,
      },
    ],
  },
];
