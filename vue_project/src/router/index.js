import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '../components/login/login-one.vue'
import Index from '../components/index/index-one.vue'
import Activity from '../components/activity/activity-one.vue'
import Activity2 from '../components/activity/activity-two.vue'
import Activity3 from '../components/activity/activity-three.vue'
import Problem1	from '../components/problem/problem-one.vue'
import Problem2	from '../components/problem/problem-two.vue'
import App1 from '../components/application/application-one.vue'
import App2 from '../components/application/application-two.vue'
import App3 from '../components/application/application-three.vue'
import App4 from '../components/application/application-four.vue'
import App5 from '../components/application/application-five.vue'
import Blog from '../components/blog/blog-one.vue'
import Solution from '../components/solution/solution-one.vue'
import Store from '../components/store/store-one.vue'
import Myspace from '../components/user/myspace/myspace.vue'
import Information from '../components/user/information/information.vue'
import Order from '../components/user/order/order.vue'
import Notification from '../components/user/notification/notification.vue'
import Set1 from '../components/user/set/set.vue'

const router = createRouter({
	history:createWebHashHistory(),
	routes:[	
		{
			path: '/login',
			component:Login,
		},
		{
			path: '/index',
			component:Index,
			
		},
		{
			path: '/activity',
			component:Activity,
		},
		{
			path: '/activity2',
			component:Activity2,
			
		},
		{
			path: '/activity3',
			component:Activity3,
		},
		{
			path: '/problem',
			component:Problem1,
		},
		{
			path: '/problem2',
			component:Problem2,
		},
		{
			path: '/application1',
			component:App1,
		},
		{
			path: '/application2',
			component:App2,
		},
		{
			path: '/application3',
			component:App3,
		},
		{
			path: '/application4',
			component:App4,
		},
		{
			path: '/application5',
			component:App5,
		},
		{
			path: '/blog',
			component:Blog,
		},
		{
			path: '/solution',
			component:Solution,
		},
		{
			path: '/store',
			component:Store,
		},
		{
			path: '/myspace',
			component:Myspace,
		},
		{
			path: '/information',
			component:Information,
		},
		{
			path: '/order',
			component:Order,
		},
		{
			path: '/notification',
			component:Notification,
		},
		{
			path: '/set',
			component:Set1,
		},
	]
})

export default router;