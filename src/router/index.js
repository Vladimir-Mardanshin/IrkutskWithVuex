import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/first',
    name: 'first',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstPage.vue')
  },
  {
    path: '/second',
    name: 'second',
    component: () => import(/* webpackChunkName: "about" */ '../views/SecondPage.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import(/* webpackChunkName: "about" */ '../views/ThreePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
