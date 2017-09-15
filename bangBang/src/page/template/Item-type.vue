<template>
	<div id="goods-type">
		<header-wrapper :text="'完善货品类型'" :headerStyle="{'border-bottom': '1px solid #DCDCDC','background':'#fff'}"></header-wrapper>
		<!--<header-wrapper :text="'我的订单'"></header-wrapper>-->
		<div id="select-type">
			<p>
				请选择货品类型：
			</p>
			<ul>
				<li>文件</li>
				<li>证件</li>
				<li>食品</li>
				<li>生活用品</li>
				<li>手机</li>
				<li>鲜花</li>
				<li>电脑</li>
				<li @click="inpShow()">其他</li>
			</ul>
			<input @click="nul($event)" id='inp' type="text" value="请填写物品信息"/>
			<p>备注信息:</p>
			<textarea name="" rows="" cols="">如有特殊需求请备注</textarea>
			<button>确认</button>
		</div>
		
	</div>
</template>

<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		},
		methods:{
			inpShow(){
				document.getElementById("inp").style.display = "block"
			},nul(e){
				e.target.value = "";
			}
		}
	}
</script>

<style lang="less">
	@import "../../../static/less/var.less";
	#goods-type{
		width:100%;
		height:100%;
		background:#fff;
	}
	#type-header{
		width:100%;
		padding: @base*1.3rem @base*1rem;
		border-bottom: @base*.1rem solid #DCDCDC;
		i{
			width: @base*.9rem;
			height: @base*1.6rem;
			display: inline-block;
			background: url(../../assets/back.png) no-repeat;
			background-size: 100% 100%;
		}
		span{
			width: @base*20rem;
			font-size: @base*1.7rem;
			color: #111111;
			margin-left: @base*11rem;
		}
	}
	#select-type{
		width: 100%;
		padding: 0 @base*1.5rem;
		p{
			font-size: @base*1.6rem;
			color: #111111;
			margin-top: @base*2.5rem; 
		}
		ul{
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			align-items: center;
			li{
				width: @base*9.2rem;
				height: @base*3rem;
				line-height: @base*3rem;
				text-align: center;
				font-size: @base*1.5rem;
				color: #666666; 
				border: @base*.1rem solid #999999;
				border-radius: @base*.3rem;
				margin-top: @base*2.5rem;
			}
			li:hover{
				background:#000;
				color:#fff;
			}
			&:after{
				content: "";
				height: @base*3rem;
				display: block;
				min-width: @base*9.2rem;
			}
		}
		#inp{
			display:none;
			width: 100%;
			height: @base*3rem;
			line-height: @base*2.8rem;
			border: @base*.1rem solid #999999;
			border-radius: @base*.3rem;
			margin-top: @base*2.6rem;
			text-align: center;
			font-size: @base*1.4rem;
			color:#DCDCDC;
		}
		textarea{
			width: 100%;
			height: @base*14.3rem;
			margin-top: @base*2rem;
			border: @base*.1rem solid #999999;
			border-radius: @base*.3rem;
			font-size: @base*1.4rem;
			color:#DCDCDC;
			resize: none;
		}
		button{
			width: 100%;
			height: @base*4.1rem;
			line-height: @base*4.1rem;
			margin-top: @base*2.9rem;
			border-radius: @base*.5rem;
			font-size: @base*1.7rem;
			color:#FFFFFF;
			background: #999999;
		}
	}
</style>