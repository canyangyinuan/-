<template>
	<div id="signIn">
		<div id='logo'>
			<img src="../assets/loge.png" alt="" />
		</div>
		<div id='reg-log'>
			<router-link to="/registration" tag="button">注　册</router-link>
			<router-link to="/login" tag="button">登　录</router-link>
			<p>我已阅读并同意 <a href="javascript:;">《帮帮服务注册协议》</a></p>
		</div>
		
	</div>
</template>

<script>
</script>

<style lang="less">
	@import "../../static/less/var.less";
	#signIn{
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		#logo{
			width:@base*18.4rem;
			height:@base*8.1rem;
			position:absolute;
			top:22%;
			left:50%;
			transform:translateX(-50%);
			img{
				width: 100%;
				height: 100%;
			}
		}
		#reg-log{
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform:translateX(-50%);
			text-align: center;
			button{
				width: @base*13.1rem;
				height: @base*5.1rem;
				margin: @base*5rem auto;
				display: block;
				border: @base*.1rem solid #444444;
				border-radius: @base*2.5rem;
				background: #fff;
				font-size: @base*1.8rem;
				color: #111111;
				text-align: center;
			}
			p{
				font-size: @base*1rem;
				color: #999999;
				padding-top:@base*4rem;
				a{
					color: #00AFFC;
				}
			}
		}
	}
	
</style>