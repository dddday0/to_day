import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Form from '@/views/Form.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/memos/add',
      name: 'add',
      component: () => import ('../views/Form.vue')
    },
    {
      path: '/memos/:id', // path variable (경로 변수)
      component: () => import ('../views/Form.vue')
    },
  ],
})

export default router
