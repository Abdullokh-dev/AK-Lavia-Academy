import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/reception',
        component: () => import('../pages/Reception.vue')
    },
    {
        path: '/academy',
        component: () => import('../pages/Academy.vue')
    },
    {
        path: '/register',
        component: () => import('../pages/Register.vue')
    },
    {
        path: '/login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/buy-course',
        component: () => import('../pages/BuyCourse.vue')
    },
    {
        path: '/test',
        component: () => import('../pages/Test.vue')
    },
    {
        path: '/bonus',
        component: () => import('../pages/Bonus.vue')
    },
    {
        path: '/winner',
        component: () => import('../pages/Winner.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router