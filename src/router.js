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
        component: () => import("@/pages/meetnosh/Meet.vue")
    },
    {
        path: '/nosh',
        name: 'Nosh',
        component: () => import("@/pages/meetnosh/Nosh.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router