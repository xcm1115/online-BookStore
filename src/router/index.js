/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import navbar from '@/components/frame/navbar'
import login from '@/components/login/login'
import register from '@/components/login/register'
import setting from '@/components/main/setting'
import home from '@/components/main/home'
import category from '@/components/main/category'
import bookInfo from '@/components/main/bookInfo'
import newProduct from '@/components/main/newProduct'
import onSale from '@/components/main/onSale'
import cart from '@/components/main/cart'
import settle from '@/components/main/settle'
import order from '@/components/main/order'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'navbar',
            component: navbar,
            children: [{
                    path: '/login',
                    name: 'login',
                    component: login,
                    meta: {
                        title: '登录'
                    }
                },
                {
                    path: '/register',
                    name: 'register',
                    component: register,
                    meta: {
                        title: '账号注册'
                    }
                },
                {
                    path: '/home',
                    name: 'home',
                    component: home,
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: '/category',
                    name: 'category',
                    component: category,
                    meta: {
                        keepAlive: true,
                        title: '书籍分类'
                    }
                },
                {
                    path: '/onSale',
                    name: 'onSale',
                    component: onSale,
                    meta: {
                        title: '特价市场'
                    }
                },
                {
                    path: '/bookInfo',
                    name: 'bookInfo',
                    component: bookInfo,
                    meta: {
                        title: '书籍详情'
                    }
                },
                {
                    path: '/newProduct',
                    name: 'newProduct',
                    component: newProduct,
                    meta: {
                        title: '新货上架'
                    }
                },
                {
                    path: '/shopping/cart',
                    name: 'cart',
                    component: cart,
                    meta: {
                        title: '购物车'
                    }
                },
                {
                    path: '/shopping/settle',
                    name: 'settle',
                    component: settle,
                    meta: {
                        title: '确认订单'
                    }
                },
                {
                    path: '/order',
                    name: 'order',
                    component: order,
                    meta: {
                        title: '我的订单'
                    }
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: setting,
                    meta: {
                        title: '个人中心'
                    }
                }
            ]
        }
    ]
})