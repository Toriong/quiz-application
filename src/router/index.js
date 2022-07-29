import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import FeedPage from '../Pages/FeedPage.vue'
import CreateAccount from '../Pages/CreateAccount.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'FeedPage',
        component: FeedPage
    },
    {
        path: '/create-account',
        name: 'CreateAccount',
        component: CreateAccount
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router