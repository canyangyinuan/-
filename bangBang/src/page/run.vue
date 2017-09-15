<template>
	<div id="run">
		<img src="../assets/loge.png"/>
	</div>
</template>

<script>
	export default{
		mounted() {
			setTimeout( () => {
				location.href="/homePage"
			},3000)
		}
	}
</script>

<style lang="less">
	#run{
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		img{
			position: absolute;
			top: 30%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>