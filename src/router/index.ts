import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/loginOrRegister', // 链接路径
      name: 'loginOrRegister', // 路由名称，
      component: () => import('@/views/10ElementPlusView/LoginAndRegisterView.vue')
    },
    {
      path: '/successView', // 链接路径
      name: 'successView', // 路由名称，
      component: () => import('@/views/10ElementPlusView/SuccessView.vue')
    }
  ]
})

export default router
