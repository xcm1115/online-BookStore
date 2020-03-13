/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/home'
import category from '@/components/category'
import bookInfo from '@/components/bookInfo'
import newProduct from '@/components/newProduct'
import onSale from '@/components/onSale'
import shopping from '@/components/shopping'
import order from '@/components/order'

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
			path: '/home',
			name: 'home',
			component: home
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
