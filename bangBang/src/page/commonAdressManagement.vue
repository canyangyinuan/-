<template>
	<div id="common-adress-nanagement-wrapper">
		<header-wrapper :text="'常用地址'" :buttonShow ="!positionBoolean" :positionShow="positionBoolean"></header-wrapper>
		<router-view></router-view>
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
				return this.$route.path == "/commonAdressManagement/addAdress" ? true : false;
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