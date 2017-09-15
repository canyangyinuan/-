<template>
	<div id="invite-frients-wrapper">
		<header-wrapper :text="'邀请好友'"></header-wrapper>
		<router-view></router-view>
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
	#invite-frients-wrapper{
		width:100%;
		height: 100%;
		background: #f3f3f3;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>