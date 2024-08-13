import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/pages/home/Homepage.vue")
    },
    {
        path: '/meetnosh',
        name: 'MeetNosh',
        component: () => import("@/pages/meetnosh/MeetNosh.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router