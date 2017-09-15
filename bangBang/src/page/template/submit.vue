<template>
	<div id="submit">
		<div id="header">
			<div>
				<img @click="back()" src="../../assets/支付/错号.png" alt="" />
				<span>订单支付</span>
				<i></i>
			</div>
		</div>
		<div id="time">
			支付剩余时间：<span>29</span>分<span>59</span>秒
		</div>
		<div id="section">
			<div id="payment">
				<sapn>需支付金额</sapn>
				<span>118元</span>
			</div>
		</div>
		<ul id="Payment-method">
			<li>付款方式</li>
			<li>
				<span id="">
					<img src="../../assets/余额.png" alt="" />
					账户余额
				</span>
				<img src="../../assets/支付/选中.png" alt="" />
			</li>
			<li>
				<span id="">
					<img src="../../assets/微信支付.png" alt="" />
					账户余额
				</span>
				<img src="../../assets/支付/未选中.png" alt="" />
			</li>
			<li>
				<span id="">
					<img src="../../assets/支付宝.png" alt="" />
					账户余额
				</span>
				<img src="../../assets/支付/未选中.png" alt="" />
			</li>
			<li>
				<span id="">
					<img src="../../assets/银联支付.png" alt="" />
					账户余额
				</span>
				<img src="../../assets/支付/未选中.png" alt="" />
			</li>
		</ul>
		<div id="clause">
			我已阅读并同意<span>《帮帮服务条款》</span>
		</div>
		<div id="yes">
			确认支付
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

<style lang="less">
	@import "../../../static/less/var.less";
	#submit{
		width:100%;
		height:100%;
		background:#fff;
		#header{
			width:100%;
			height:@base*4.5rem;
			background:#000;
			>div{
				height:100%;
				margin:0 @base*1.5rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-between;
				align-items: center;
				>img{
					width:@base*1.6rem;
					height:@base*1.6rem;
				}
				>span{
					color:#fff;
					font-size:@base*1.7rem;	
				}
			}
		}
		#time{
			width:100%;
			text-align: center;
			height:@base*1.6rem;
			background:#f8f8f8;
			font-size:@base*1rem;
			color:#666;
		}
		#section{
			width:100%;
			background:#fff;
			#payment{
				padding:@base*2rem @base*1.5rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-between;
				align-items: center;
				border-top:1px solid #dcdcdc;
				border-bottom:1px solid #dcdcdc;
			}
		}
		#Payment-method{
			width:100%;
			height:@base*25rem;
			background:#fff;
			border-bottom:1px solid #dcdcdc;
			>li{
				height:20%;
				line-height:@base*5rem;
				padding:0 @base*1.5rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-between;
				align-items: center;
				img{
					width:@base*1.4rem;
					height:@base*1.4rem;
				}
			}
			>li:first-child{
				font-size:@base*1.7rem;
			}
		}
		#clause{
			width:100%;
			color:#666666;
			font-size:@base*1rem;
			text-align:center;
			padding:@base*1.4rem 0;
			background:#fff;
			>span{
				color:#00b2ff;
			}
		}
		#yes{
			margin:0 @base*1.5rem;
			margin-top:@base*1rem;
			background:#111;
			border-radius: @base*0.5rem;
			color:#fff;
			font-size:@base*1.6rem;
			text-align: center;
			padding:@base*1.4rem;
		}
	}
</style>