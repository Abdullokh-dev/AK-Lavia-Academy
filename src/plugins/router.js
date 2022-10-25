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
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router