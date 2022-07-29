import { createWebHistory, createRouter } from "vue-router"
import FeedPage from '../Pages/FeedPage.vue'

const routes = [
    {
        path: "/",
        name: "Feed",
        component: FeedPage
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
