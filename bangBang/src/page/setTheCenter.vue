<template>
	<div id="set-the-center-wrapper">
		<header-wrapper :text="'设置中心'"></header-wrapper>
		<router-link to="/feedback">意见反馈</router-link>
		<router-link to="/aboutUs">关于我们</router-link>
	</div>
</template>

<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		}
	}
</script>

<style>
	#set-the-center-wrapper{
		width:100%;
		height: 100%;
		background: #f3f3f3;
	}
</style>