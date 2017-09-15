<template>
	<div id="package">
		<div id="bgcolor">
			
		</div>
		<div id="xzzl">
			<span @click="back()">取消</span>
			<span>是否需要包裹</span>
			<span @click="back()">确定</span>
		</div>
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
	#package{
		width:100%;
		height:100%;
	}
	#bgcolor{
		width:100%;
		height: 60%;
		background:#000;
		opacity: .4;
	}
</style>