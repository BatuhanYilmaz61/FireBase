import { Record } from 'immutable';
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: () =>
                import ("../views/home.vue")
        },
        // {
        //   path: "/register",
        // component: () =>
        //   import ("../views/register.vue")
        //},
        {
            path: "/sign-in",
            component: () =>
                import ("../views/sign.vue")
        },
        {
            path: "/feed",
            component: () =>
                import ("../views/feed.vue"),

        },

    ],
});


export default router