import {createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/pages/home/Homepage.vue")
    },
    {
        path: '/meet',
        name: 'Meet',
        component: () => import("@/pages/meetnosh/Meet/index.vue"),
        meta: {title: '장소 정하기:MN'}
    },
    {
        path: '/nosh',
        name: 'Nosh',
        component: () => import("@/pages/meetnosh/Nosh/index.vue"),
        meta: {title: '맛집 찾기:MN'}
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  // 페이지 이동 시 제목 업데이트
  router.afterEach((to) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
  });

export default router