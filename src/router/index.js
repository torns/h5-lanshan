import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import viewLayout from '@/views/view/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/view',
    name: 'view',
    component: viewLayout,
    children: [
      {
        path: '/',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/view/home.vue')
      },
      {
        path: '/custom1',
        name: 'custom1',
        component: () => import(/* webpackChunkName: "about" */ '../views/view/custom1.vue')
      },
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
