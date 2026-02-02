import PracticeDetail from '@/views/PracticeDetail.vue'
import PracticeList from '@/views/PracticeList.vue'
import WriteMod from '@/views/WriteMod.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'practicelist',
      component: PracticeList,
    },
    
    
    {
      path: '/write',
      name: 'wirtemod',
      component: WriteMod,
    },

    {
      path: '/detail',
      name: 'practicedetail',
      component: PracticeDetail,
    }

  ],
})

export default router
