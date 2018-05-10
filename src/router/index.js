import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Home from '@/components/home'
import Index from '@/components/index'
import Search from '@/components/search'
import Jianshen from '@/components/jianshen'
import Zhishi from '@/components/zhishi'
import My from '@/components/my'
import MyInfo from '@/components/myinfo'
import MyPoints from '@/components/mypoints'
import MyGetPoints from '@/components/signin_get_points'
import ZhishiDetails from '@/components/zhishi_details'
import JianshenDetails from '@/components/jianshen_details'

Vue.use(Router)

export default new Router({
  routes: [{
	  	path:'/',
	  	redirect:'/index',//直接默认访问地址
  	},{
      path: '/login',//就是加载的路径名字
      name: 'login',
      component: Login
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
  		path:'/index',
      component:Index,
      children:[{
          path:'/',
          redirect: '/index/home'
        },{
          path:'home',
          name:'home',
          component:Home
      },{
        path: 'jianshen',
        name: 'jianshen',
        component: Jianshen
      },{
        path: 'zhishi',
        name: 'zhishi',
        component: Zhishi
      },{
        path: 'my',
        name: 'my',
        component: My
      },{
        path: 'search',
        name: 'search',
        component: Search
      },{
        path: 'myinfo',
        name: 'myinfo',
        component: MyInfo
      },{
        path: 'mypoints',
        name: 'mypoints',
        component: MyPoints
      },{
        path: 'signin_get_points',
        name: 'signin_get_points',
        component: MyGetPoints
      },{
        path: 'zhishi_details',
        name: 'zhishi_details',
        component: ZhishiDetails
      },{
        path: 'jianshen_details',
        name: 'jianshen_details',
        component: JianshenDetails
      }]
  	}
  ]
})
