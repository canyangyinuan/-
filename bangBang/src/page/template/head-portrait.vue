<template>
	<div id="head-portrait">
		<header>
			<i class="iconfont icon-back" @click="back()"></i>
			<span id="">
				更换头像
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
</style>