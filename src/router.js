import {createRouter, createWebHistory} from 'vue-router'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router