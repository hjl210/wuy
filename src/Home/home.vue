<template>
	<el-container>
		<el-aside width="250px">
			<div class="top">
				<img src="../assets/logo.png" />
				<h3>电商后台管理系统</h3>
				<!-- 菜单 -->
				<el-menu background-color="#545d64" text-color="white" >
					<el-sub-menu index="1">
						<template #title>
							<el-icon><List /></el-icon>
							<span>订单管理</span>
						</template>
						<el-menu-item index="/home/order/0">普通订单</el-menu-item>
						<el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<el-icon><List /></el-icon>
							<span>商品管理</span>
						</template>
						<el-menu-item index="/home/order/0">普通订单</el-menu-item>
						<el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
						<el-menu-item index="/home/order/2">今日推荐</el-menu-item>
						<el-menu-item index="/home/cat">商品分类</el-menu-item>
					</el-sub-menu>
					<el-sub-menu index="3">
						<template>
							<el-icon><Shop /></el-icon>
							<span>店长管理</span>
						</template>
						<el-menu-item index="/home/ownerlist">秒杀订单</el-menu-item>
						<el-menu-item index="/home/ownerreq">秒杀订单</el-menu-item>
						<el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
						<el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
					</el-sub-menu>
					
					
				</el-menu>
			</div>
		</el-aside>
	
	
	
	<el-main style="margin: 0; padding: 0;">
		<div class="header">
			<h1>欢迎登录电商后台管理系统，管理员用户：</h1>
		</div>
		<router-view></router-view>
	</el-main>
	</el-container>
</template>

<script setup>
	import { List,Shop,Avatar,Ticket,Tools} from '@element-plus/icons-vue'
	// 引入路由模块
	import {useRoute} from 'vue-router'
	import store from '@/store'
	const logout = ()=>{
		store.commit('Logout')
	}
	
</script>

<style scoped>
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.container .top{
		background-color: #595959;
		height: 60px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.container .top img{
		width: 25px;
		height: 25px;
	}
	.container .top h3{
		color: white;
		font-size: 20px;
	}
	.container .header{
		background-color: blanchedalmond;
		
	}
	
</style>
