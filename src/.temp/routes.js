const c1 = () => import(/* webpackChunkName: "page--src-pages-sched-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Sched.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-sched2-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Sched2.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-map-old-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Map_old.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-map-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Map.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-faq-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\FAQ.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\node_modules\\gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Index.vue")

export default [
  {
    path: "/sched/",
    component: c1
  },
  {
    path: "/sched2/",
    component: c2
  },
  {
    path: "/map-old/",
    component: c3
  },
  {
    path: "/map/",
    component: c4
  },
  {
    path: "/faq/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
