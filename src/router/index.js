import Vue from 'vue'
import VueRouter from 'vue-router'
import viewLayout from '@/pages/view/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../pages/register.vue')
  },
  {
    path: '/view',
    name: 'view',
    component: viewLayout,
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/home.vue')
      },
      {
        path: '/custom1',
        name: 'custom1',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom1.vue')
      },
      {
        path: '/custom2',
        name: 'custom2',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom2.vue')
      },
      {
        path: '/custom3',
        name: 'custom3',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom3.vue')
      },
      {
        path: '/custom4',
        name: 'custom4',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom4.vue')
      },
      {
        path: '/custom5',
        name: 'custom5',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom5.vue')
      },
      {
        path: '/custom6',
        name: 'custom6',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom6.vue')
      },
      {
        path: '/custom7',
        name: 'custom7',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom7.vue')
      },
      {
        path: '/custom8',
        name: 'custom8',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom8.vue')
      },
      {
        path: '/custom9',
        name: 'custom9',
        component: () => import(/* webpackChunkName: "about" */ '../pages/view/custom9.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
