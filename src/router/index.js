/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/category',
			name: 'category',
			component: category
		},
	]
})
