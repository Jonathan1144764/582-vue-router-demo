import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UsersView from "../views/UsersView.vue";
import UsersAboutView from "../views/UsersAboutView.vue";
import PropRouteView from "../views/PropRouteView.vue";
import DemoView from "../views/DemoView.vue";
import DemoPostBeforeView from "../views/DemoPostBeforeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/prop/:id",
    name: "prop",
    component: PropRouteView,
    props: true,
  },
  {
    path: "/demo/:id",
    name: "demo",
    component: DemoView,
    props: true,
  },
  {
    path: "/before/:id",
    name: "before",
    component: DemoPostBeforeView,
    props: true,
  },
  {
    path: "/user/:id",
    name: "user",
    component: UsersView,
    children: [
      {
        path: "about/:username",
        name: "aboutuser",
        component: UsersAboutView,
        props: true,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const isAuthenticated = true;

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== "about" && !isAuthenticated) next({ name: "about" });
  else next();
});

export default router;
