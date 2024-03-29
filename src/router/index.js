import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Input from '../views/Input.vue'
import Histry from '../views/Histry.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/',
    name: 'Input',
    component: Input
  },
  {
    path: '/',
    name: 'Histry',
    component: Histry
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
