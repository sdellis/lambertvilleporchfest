const c1 = () => import(/* webpackChunkName: "page--src--pages--sched-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/Sched.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--map-old-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/Map_old.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--map-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/Map.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--faq-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/FAQ.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/elliss/Development/lambertvilleporchfest/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/elliss/Development/lambertvilleporchfest/src/pages/Index.vue")

export default [
  {
    path: "/sched/",
    component: c1
  },
  {
    path: "/map-old/",
    component: c2
  },
  {
    path: "/map/",
    component: c3
  },
  {
    path: "/faq/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
