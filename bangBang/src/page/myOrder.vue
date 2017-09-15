<template>
	<div id="my-order-wrapper">
		<header-wrapper :text="'我的订单'" :searchShow = "searchShow" style='background: #fff;'></header-wrapper>
		<ul id='order-status'>
			<router-link tag="li" to="/myOrder/allOrder">全部</router-link>
			<router-link tag="li" to="/myOrder/progress">进行中</router-link>
			<router-link tag="li" to="/myOrder/toComplete">完成单</router-link>
			<router-link tag="li" to="/myOrder/cancel">取消单</router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		},
		computed: {
			searchShow() {
				return this.$route.path == "/myOrder/progress" ? false : true
			}
		}
	}
</script>

<style lang="less">
	@import "../../static/less/var.less";
	#my-order-wrapper{
		width:100%;
		height: 100%;
		background: #f3f3f3;
	}
	#order-status{
		width: 100%;
		display: flex;
		justify-content: space-around;
		background: #fff;
		li{
			font-size: @base*1.5rem;
			color:#111111;
		}
		.active{
			border-bottom: @base*.3rem solid #111111;
			font-size: @base*1.6rem;
			padding:0 @base*1rem @base*.5rem @base*1rem;
			font-size: @base*1.6rem;
		}
	}
</style>