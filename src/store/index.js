import {createStore} from 'vuex'

export default createStore({
	state:{
		userName:'',
		userPwd:'',
		// 只有符合下面任意一个登录信息的用户才能成功登录并进入1主页
		person:[
			{id:1,userName:'admin' , userPwd:'admin123'},
			{id:1,userName:'ywc' , userPwd:'ywc123'},
			{id:1,userName:'it' , userPwd:'it123'},
		]
	},
	// 相当于计算属性,都需要设置return返回
	getters:{
		// 如果有第三方接口，有数据接口的情况下，此处应该是判断是否获取到token(登录状态的唯一标识)
		isLogin(state){
			console.log(1)
			// 共享空间内的用户名和密码都不为空的情况下，isLogin返回true表示为已登录
			return state.userName.length > 0 && state.userPwd.length > 0;
		}
	},
	mutations:{
		// 存储登录信息
		LoginUserInfo(state, { uname , pwd}){
			state.userName = uname;
			state.userPwd = pwd
		},
		
	},
	actions:{
		
	},
	modules:{
		
	}
})
