<template>
	<div>
		<header-wrapper :text="'寄件地址'" :positionShow="positionBoolean"></header-wrapper>
		<router-link tag="button" to="/sendAnAddress/historyAdress">历史地址</router-link>
		<router-link tag="button" to="/sendAnAddress/theCommonlyUsedAdress">常用地址</router-link>
		<router-view></router-view>
		<router-link to="/sendDetail">选择成功</router-link>
	</div>
</template>

<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		},
		computed:{
			positionBoolean(){
				return this.$route.path == "/sendAnAddress" ? true : false;
			} 
		}
	}
</script>

<style>
	#common-adress-nanagement-wrapper{
		width:100%;
		height: 100%;background: #f3f3f3;
	}
</style>