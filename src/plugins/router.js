import {createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '',
        component: () => import('../pages/Home.vue')
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router