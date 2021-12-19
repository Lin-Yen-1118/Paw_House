import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    meta: {
      title: '首頁'
    }
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/aboutUs.vue'),
    meta: {
      title: '民宿介紹-關於我'
    }
  },
  {
    path: '/adopt_main',
    name: 'adopt_main',
    component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_main.vue'),
    meta: {
      title: '認養專區-認養須知'
    }
  },

  {
    path: '/adopt_dog',
    name: 'dogs',
    component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_animals.vue'),
    meta: {
      title: '認養專區-狗狗'
    }
  },

  {
    path: '/adopt_cat',
    name: 'cats',
    component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_animals.vue'),
    meta: {
      title: '認養專區-貓貓'
    }
  },
  {
    path: '/adopt_rabbit',
    name: 'rabbits',
    component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_animals.vue'),
    meta: {
      title: '認養專區-兔兔'
    }
  },

  {
    path: '/adopt_rodent',
    name: 'rodents',
    redirect: { name: 'guineapigs' },
    component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_rodent.vue'),
    children: [
      {
        path: '/adopt_guineapigs',
        name: 'guineapigs',
        component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_animals.vue'),
        meta: {
          title: '認養專區-天竺鼠'
        }
      },
      {
        path: '/adopt_hamsters',
        name: 'hamsters',
        component: () => import(/* webpackChunkName: "backend" */ '../views/adopt_animals.vue'),
        meta: {
          title: '認養專區-倉鼠'
        }
      }
    ]
  },

  {
    path: '/room',
    name: 'room',
    component: () => import(/* webpackChunkName: "backend" */ '../views/room.vue'),
    meta: {
      title: '住宿專區'
    }
  },

  {
    path: '/room_detail',
    name: 'room_detail',
    redirect: { name: 'room_detail' },
    component: () => import(/* webpackChunkName: "backend" */ '../views/room_detail.vue'),
    children: [
      {
        path: '/small_room',
        name: 'small_room',
        component: () => import(/* webpackChunkName: "backend" */ '../views/room.vue'),
        meta: {
          title: '住宿專區-溫馨小房'
        }
      },
      {
        path: '/large_room',
        name: 'large_room',
        component: () => import(/* webpackChunkName: "backend" */ '../views/room.vue'),
        meta: {
          title: '住宿專區-寬敞大房'
        }
      },
      {
        path: '/luxury_room',
        name: 'luxury_room',
        component: () => import(/* webpackChunkName: "backend" */ '../views/room.vue'),
        meta: {
          title: '住宿專區-豪華家庭房'
        }
      }
    ]
  },

  {
    path: '/pet_accommodation',
    name: 'pet_accommodation',
    component: () => import(/* webpackChunkName: "backend" */ '../views/pet_accommodation.vue'),
    meta: {
      title: '毛孩寄宿專區'
    }
  },

  {
    path: '/pet_accommodation_detail',
    name: 'pet_accommodation_detail',
    redirect: { name: 'pet_accommodation_detail' },
    component: () =>
      import(/* webpackChunkName: "backend" */ '../views/pet_accommodation_detail.vue'),
    children: [
      {
        path: '/room_dog',
        name: 'room_dog',
        component: () => import(/* webpackChunkName: "backend" */ '../views/pet_accommodation.vue'),
        meta: {
          title: '毛孩住宿專區-狗狗房'
        }
      },
      {
        path: '/room_cat',
        name: 'room_cat',
        component: () => import(/* webpackChunkName: "backend" */ '../views/pet_accommodation.vue'),
        meta: {
          title: '毛孩住宿專區-貓貓房'
        }
      },
      {
        path: '/room_rabbitANDguineapig',
        name: 'room_rabbitANDguineapig',
        component: () => import(/* webpackChunkName: "backend" */ '../views/pet_accommodation.vue'),
        meta: {
          title: '毛孩住宿專區-兔兔 | 天竺鼠房'
        }
      },
      {
        path: '/room_hamster',
        name: 'room_hamster',
        component: () => import(/* webpackChunkName: "backend" */ '../views/pet_accommodation.vue'),
        meta: {
          title: '毛孩住宿專區-倉鼠房'
        }
      }
    ]
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "backend" */ '../views/cart.vue'),
    meta: {
      title: '購物車'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "backend" */ '../views/user.vue'),
    meta: {
      title: '會員專區'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "backend" */ '../views/product.vue'),
    meta: {
      title: '販售商品'
    }
  },
  {
    path: '/item',
    name: 'item',
    component: () => import(/* webpackChunkName: "backend" */ '../views/item.vue'),
    meta: {
      title: '販售商品'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/Paw_House/',
  routes
})

// 設定每頁的 meta title
router.beforeEach((to, _, next) => {
  const { title } = to.meta
  if (title) {
    document.title = title
  }
  next()
})
export default router
