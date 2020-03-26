/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login/login'
import register from '@/components/login/register'
import setting from '@/components/main/setting'
import index from '@/components/main/index'
import category from '@/components/main/category'
import bookInfo from '@/components/main/bookInfo'
import newProduct from '@/components/main/newProduct'
import onSale from '@/components/main/onSale'
import shopping from '@/components/main/shopping'
import order from '@/components/main/order'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
            name: 'login',
            component: login
		},
		{
			path: '/register',
            name: 'register',
            component: register
        },
        {
			path: '/setting',
			name: 'setting',
			component: setting
		},
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/category',
			name: 'category',
            component: category,
            meta: {
                keepAlive: true
            }
		},
		{
			path: '/onSale',
			name: 'onSale',
			component: onSale
		},
		{
			path: '/bookInfo',
			name: 'bookInfo',
            component: bookInfo,
            meta: {
                keepAlive: true
            }
		},
		{
			path: '/newProduct',
			name: 'newProduct',
			component: newProduct
		},
		{
			path: '/shopping',
			name: 'shopping',
			component: shopping
		},
		{
			path: '/order',
			name: 'order',
			component: order
        }
	]
})
