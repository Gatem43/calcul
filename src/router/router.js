import { createWebHistory , createRouter } from "vue-router"
import Main from "@/pages/Main.vue"
import Opisanie from "@/pages/Opisanie.vue"
import Energy from "@/pages/Energy.vue"

const routes = [
    {
        path: '/',
        component: Main,
    },

    {
        path: '/opisanie',
        component: Opisanie,
    },

    {
        path: '/energy',
        component: Energy,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;