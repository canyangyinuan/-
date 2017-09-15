<template>
	<div id="fare">
		<header>
			<i class="iconfont icon-back" @click="back()"></i>
			<span id="">
				加价
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
	#fare{
		width:000%;
		height:100%;
	}
</style>