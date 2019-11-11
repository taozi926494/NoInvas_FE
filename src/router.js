import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/views/layout/Layout';

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'home',
        component: Layout,
        redirect: '/dashboard',
        children: [{
                path: 'dashboard',
                name: 'dashboard',
                component: () =>
                    import ('@/views/dashboard/index'),
            }, {
                path: 'apimanager',
                name: 'apimanager',
                component: () =>
                    import ('@/views/apimanager/syslist/index'),
            }, {
                path: 'uploadapi',
                name: 'uploadapi',
                component: () =>
                    import ('@/views/uploadapi/index'),
            },
            {
                path: 'apimanager/sys/:sys_id',
                name: 'sys',
                component: () =>
                    import ('@/views/apimanager/apilist/index'),
            },
            {
                path: 'apimanager/sys/:sys_id/api/:api_id',
                name: 'apiinfo',
                component: () =>
                    import ('@/views/apimanager/apiinfo/index'),
            }, {
                path: 'uploadsys',
                name: 'uploadsys',
                component: () =>
                    import ('@/views/uploadsys/index'),
            },
        ]
    }]
})