/*
 * @Author       : zuohy
 * @Date         : 2024-02-05 14:10:48
 * @LastEditTime : 2024-02-06 10:40:10
 * @LastEditors  : zuohy
 * @Description  : 
 */
import { createRouter, createWebHashHistory} from "vue-router"

const router = createRouter( {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', 
            redirect: '/main'
        },
        {
            path: '/login',
            component: () => import('../views/login/Login.vue')
        },
        {
            path: '/main',
            component: () => import('../views/main/Main.vue')
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import("../views/not-found/NotFound.vue")
        }
    ]
})

export default router