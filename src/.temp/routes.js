const c1 = () => import(/* webpackChunkName: "page--src-templates-porches-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\templates\\Porches.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-sched-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Sched.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-porches-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Porches.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-map-old-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Map_old.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-map-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Map.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-faq-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\FAQ.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\node_modules\\gridsome\\app\\pages\\404.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\mattp\\Desktop\\Development\\lambertvilleporchfest\\src\\pages\\Index.vue")

export default [
  {
    path: "/porches/204-brunswick-ave/",
    component: c1
  },
  {
    path: "/porches/5-york-street/",
    component: c1
  },
  {
    path: "/sched/",
    component: c2
  },
  {
    path: "/porches/",
    component: c3
  },
  {
    path: "/map-old/",
    component: c4
  },
  {
    path: "/map/",
    component: c5
  },
  {
    path: "/faq/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
