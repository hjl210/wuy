import { createRouter, createWebHistory } from 'vue-router'
// 引入store/index.js文件
import store from '../store'
// 引入组件
import Login from '../Logins/Login.vue'
import order from '../order/order.vue'

const routes = [
  {
    path: '/a',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Home/home.vue'),
	// 当浏览器访问地址“/home”的时候，重定向到普通订单界面
	redirect:'home/order/0',
	// 嵌套子路由
	children:[
		{
			// 浏览器会根据所点击的菜单型确认目前调用的数据类型
			path:'order/:type',
			name:'order',
			component: order
		}
	]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 前置路由守卫
// to :目标地址：from:来源地址:next() 下一步操作
router.beforeEach( (from)=>{
	let isLogin = store.getters.isLogin;
	// 判断如果存储了登录信息或者来源地址就是登录页面
	if(isLogin || from.name == 'Login'){
		return true;
	}else{
		// 如果没有登录呢：强制返回登录页
		return {name:'Login'}
	}
})

export default router
