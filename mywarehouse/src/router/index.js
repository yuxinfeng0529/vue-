import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'long',
    component: () => import(/* webpackChunkName: "long" */ '../components/long/long.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../components/home/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "index" */ '../components/index/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../components/user/user.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import(/* webpackChunkName: "goods" */ '../components/goods/goods.vue')
      },
      {
        path: '/ding',
        name: 'ding',
        component: () => import(/* webpackChunkName: "ding" */ '../components/ding/ding.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
