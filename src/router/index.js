import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Hot from '../components/hot.vue'
import Coming from '../components/coming.vue'
import Feature from '../components/feature.vue'
import Movied from '../components/movied.vue'
import Ticket from '../components/ticket.vue'
import Trailer from '../components/trailer.vue'
import Review from '../components/review.vue'
import Mall from '../components/mall.vue'
import New from '../components/new.vue'
import Member from '../components/member.vue'
import Toplist from '../components/toplist.vue'
import List from '../components/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		component: Home,

		children: [{
			path: 'hot',
			component: Hot
		},
		{
			path: 'coming',
			component: Coming
		},
		{
			path: 'feature',
			component: Feature
		}
		]
	},

	{	
		name:'movied',
		path: '/movie/:id',		//电影详情
		component: Movied
	},

	{
		path:'/ticket',					//购票
		component: Ticket
	},

	{
		path: '/trailer',				//预告片
		component: Trailer
	},

	{
		path: '/toplist',				//排行榜
		component: Toplist
	},

	{
		path: 'review', 				//影评
		component: Review
	},

	{
		path:'/mall/index',  			//商城
		component: Mall,
		children: [
			{	
				name: 'list',
				path: 'list/:id',
				component: List
			}
		]
	},

	{
		path: '/new',  					//发现
		component: New
	},

	{
		path: '/member/signin',
		component: Member
	}
  ]
})
