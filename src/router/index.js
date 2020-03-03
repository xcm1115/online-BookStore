/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/home',
			name: 'home',
			component: home
		},
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
			path: '/category',
			name: 'category',
			component: category
		},
	]
})
