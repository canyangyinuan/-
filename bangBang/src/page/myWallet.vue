<template>
	<div id="my-wallet-wrapper">
		<header-wrapper :text="'我的钱包'"></header-wrapper>
			<router-link to="/recharge">充值</router-link>
			<router-link to="/cashWithdrawal">提现</router-link>
			<router-link to="/myWalletCoupons">优惠券</router-link>
			<router-link to="/transactionDetails">交易明细</router-link>
			<router-link to="/thePriceThat">价格说明</router-link>
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
	#my-wallet-wrapper{
		width:100%;
		height: 100%;
		background: #f3f3f3;
	}
</style>