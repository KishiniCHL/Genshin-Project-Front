import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HutaoView from '../views/HutaoView.vue'

const routes = [
  {
    path: '/',
    name: 'Hutao',
    component: HutaoView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/Hutao',
  //   name: 'Hutao',
  //   component: HutaoView
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
