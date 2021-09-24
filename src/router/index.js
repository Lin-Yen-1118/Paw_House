import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/aboutUs.vue"),
  },
  {
    path: "/adopt_main",
    name: "adopt_main",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/adopt_main.vue"),
  },
  {
    path: "/room",
    name: "room",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/room.vue"),
  },
  {
    path: "/pet_accommodation",
    name: "pet_accommodation",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/pet_accommodation.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/cart.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/user.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () =>
      import(/* webpackChunkName: "backend" */ "../views/product.vue"),
  },

];

const router = new VueRouter({
  routes,
});

export default router;
