<template>
	<div id="my-message-wrapper">
		<header-wrapper :text="'我的消息'"></header-wrapper>
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
	#my-message-wrapper{
		width:100%;
		height: 100%;
		background: #f3f3f3;
	}
</style>