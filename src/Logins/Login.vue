<template>
	<div class="container">
		<div class="title">
			<h1>电商后台管理系统</h1>
		</div>
		<div class="form_input">
			<el-input :prefix-icon="User" v-model="uname" placeholder="请输入用户名"></el-input>
		</div>
		<div class="form_input">
			<el-input type="password" show-password :prefix-icon="Lock" v-model="pwd" placeholder="请输入密码"></el-input>
		</div>
		<div class="form_input">
			<el-button type="primary" :disabled="disabled" @click="login" style="width: 500px;">登录</el-button>
		</div>
	</div>
</template>

<script setup>
	// 引入图标组件
	import {User,Lock} from '@element-plus/icons-vue';
	import {computed, ref} from 'vue';
	import store from '@/store';
	import {useRouter } from 'vue-router';
	import {ElMessage} from 'element-plus';
	
	// 声明变量
	let uname = ref('')
	let pwd = ref('')
	// 将函数的结果赋值给常量
	const router = useRouter();
	// 设置计算属性 根据输入框是否有值来控制按钮的禁用情况
	const disabled=computed(()=>{
		return uname.value.length == 0 || pwd.value.length==0
	});
	// 创建点击事件函数
	const login = ()=>{
		// 调用store的mutations函数
		console.log(uname.value)
		console.log(store.state.userName)
		store.commit('LoginUserInfo',{
			uname:uname.value,
			pwd:pwd.value
		})
		// 获取是否有数据的结果
		let isLogin = store.getters.isLogin;
		if(isLogin){
			ElMessage({
				message:'登录成功',
				type:'success',
				deration:1000
			})
			console.log(1)
			// 设置跳转到主页
			setTimeout( ()=>{
				router.push({name:'about'})
			},2000)
		}else if(!isLogin){
			ElMessage({
				message:'登录失败',
				type:'warning',
				deration:1000
			})
			setTimeout( ()=>{
				router.push({name:'home'})
			},2000)
		}
	}
	// import {mapState} from 'vuex'
	// export default{
	// 	computed:{
	// 		...mapState(['uname'])
	// 		...mapState(['pwd'])
	// 	}
	// }
</script>

<style scoped>
	.container{
		background-color: #595959;
		background-image: url(../assets/login_bg.jpg);
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.container .title{
		text-align: center;
		color: white;
		margin-top: 200px;
	}
	.container .form_input{
		width: 500px;
		margin: 20px auto;
	}
</style>
