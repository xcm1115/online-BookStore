/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/front/login/login'
import register from '@/components/front/login/register'
import setting from '@/components/front/main/setting'
import index from '@/components/front/main/index'
import category from '@/components/front/main/category'
import bookInfo from '@/components/front/main/bookInfo'
import newProduct from '@/components/front/main/newProduct'
import onSale from '@/components/front/main/onSale'
import shopping from '@/components/front/main/shopping'
import order from '@/components/front/main/order'

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
			component: category
		},
		{
			path: '/onSale',
			name: 'onSale',
			component: onSale
		},
		{
			path: '/bookInfo',
			name: 'bookInfo',
			component: bookInfo
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
		},
	]
})
