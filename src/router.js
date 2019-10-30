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
                path: 'apimanager/sys/:name',
                name: 'sys',
                component: () =>
                    import ('@/views/apimanager/apilist/index'),
            },
            {
                path: 'apimanager/sys/:name/api/:info',
                name: 'apiinfo',
                component: () =>
                    import ('@/views/apimanager/apiinfo/index'),
            }
        ]
    }]
})