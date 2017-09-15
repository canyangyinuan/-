<template>
	<div id="all-order-wrapper">
		<div id="no-order">
			
			<ul id="order-list">
				<li>
					<p class='order-number'>
						<span>49353667789112</span><span>进行中</span>
					</p>
					<div>
						<p>发：<span>昌平区陇原小区C栋</span></p>
						<p>收：<span>丰台科技园总部基地22号楼5楼</span></p>
					</div>
					<p>2017-08-01 10:44:12</p>
				</li>
				<li>
					<p class='order-number'>
						<span>49353667789112</span><span>进行中</span>
					</p>
					<div>
						<p>发：<span>昌平区陇原小区C栋</span></p>
						<p>收：<span>丰台科技园总部基地22号楼5楼</span></p>
					</div>
					<p>2017-08-01 10:44:12</p>
				</li>
				<li>
					<p class='order-number'>
						<span>49353667789112</span><span>进行中</span>
					</p>
					<div>
						<p>发：<span>昌平区陇原小区C栋</span></p>
						<p>收：<span>丰台科技园总部基地22号楼5楼</span></p>
					</div>
					<p>2017-08-01 10:44:12</p>
				</li>
				<li>
					<p class='order-number'>
						<span>49353667789112</span><span>进行中</span>
					</p>
					<div>
						<p>发：<span>昌平区陇原小区C栋</span></p>
						<p>收：<span>丰台科技园总部基地22号楼5楼</span></p>
					</div>
					<p>2017-08-01 10:44:12</p>
				</li>
			</ul>	
			
		</div>
	</div>
</template>

<!--<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		}
	}
</script>-->

<style lang="less">
	@import "../../../static/less/var.less";
	#all-order-wrapper{
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
			padding:0 @base*1rem @base*.5rem @base*1rem;
			color:#111111;
			font-size: @base*1.5rem;
		}
		.active{
			border-bottom: @base*.3rem solid #111111;
			font-size: @base*1.6rem;
		}
	}
	#no-order{
		width: 100%;
		display: flex;
		justify-content: center;
		/*padding-top: @base*12.1rem;*/
		>div{
			width:@base*13.8rem;
			height: @base*10.2rem;
			text-align: center;
			img{
				width:@base*5rem;
				height: @base*5.8rem;
				margin: auto;
			}
			p{
				font-size: @base*1.5rem;
				color:#999999;
				padding-top: @base*2rem;
			}
		}
		ul{
			width: 100%;
			li{
				width: 100%;
				border-top:@base*.1rem solid #DCDCDC;
				border-bottom:@base*.1rem solid #DCDCDC;
				background: #fff;
				margin-top: @base*1.5rem;
				p{
					padding: @base*.5rem @base*1.5rem;
				}
				p:last-child{
					font-size: @base*1.4rem;
					color:#333333;
				}
				.order-number{
					font-size: @base*1.4rem;
					color:#333333;
					display: flex;
					justify-content: space-between;
					span:last-child{
						color:#00AFFC;
					}
				}
				>div{
					background: #FAFAFA;
					p{
						height: @base*2.5rem;
						line-height: @base*1.5rem;
						font-size: @base*1.4rem;
						color:#666666;
						span{
							font-size: @base*1.5rem;
							color:#111111;
						}
					}
				}
			}
		}
		
	}
</style>