<template>
	<div id="Price-description">
		<header>
			<i class="iconfont icon-back" @click="back()"></i>
			<span id="">
				计价规则
			</span>
		</header>
	</div>
</template>

<script>
	export default{
		methods:{
			back() {
				history.back()
			}
		}
	}
</script>

<style>
	#Price-description{
		width:100%;
		height:100%;
	}
</style>