import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/views/layout/Layout';
import dashboard from '@/views/dashboard/index';

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Layout,
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
        }, {
            path: 'apimanager',
            name: 'apimanager',
            component: () =>
                import ('@/views/apimanager/index'),
        }, {
            path: 'uploadapi',
            name: 'uploadapi',
            component: () =>
                import ('@/views/uploadapi/index'),
        },
        {
            path: 'apimanager/:name',
            name: 'apisouorcename',
            component: () =>
                import ('@/views/apimanager/detailPage/index'),
        }
    ]
    }]
})