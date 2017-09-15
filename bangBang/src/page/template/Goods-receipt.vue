<template>
	<div id="Deliver-goods">
		<div id="Deliver-goods-header">
			<div>
				<i class="iconfont icon-jiantou" @click="back()"></i>
				<b>完善收货地址</b>
				<span class="dizhi"><img src="../../assets/上面的坐标.png"/>&nbsp;北京</span>
			</div>
			
		</div>
		
		
		
		<div id="Deliver-goods-section">
			<p><input type="text" placeholder="收货地址"/></p>
			<p><input type="text" placeholder="楼层或门牌号"/></p>
			<div id="sect-divs">
				<div id="sect-left">
					<p><input type="text" placeholder="收货人姓名"/></p>
					<p><input type="text" placeholder="收货人手机号码" /></p>
				</div>
				<div id="sect-right">
					<img src="../../assets/通讯录.png"/>
					<p>手机通讯录</p>
				</div>
			</div>
			<div id="yes">确认</div>
			
			<ul id="sect-btom">
				<li>常用地址</li>
				<li>历史地址</li>
			</ul>
			<div id="tab">
				<div id="tab-one">
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
				</div>
				<div id="tab-two">
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
					<div class="mgn-p">
							<img src="../../assets/下面的坐标.png" alt="" />
						
						<div>
							<p>北京市昌平区龙源小区c栋-2017号</p>
							<p><span>张旭</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>15510124667</span></p>
						</div>
					</div>
				</div>	
			</div>
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
	#Deliver-goods{
		width:100%;
		height:100%;
		background:#fff;
		>#Deliver-goods-header{
			width:100%;
			position:fixed;
			top:0;
			background:#fff;
			height:@base*5rem;
			>div{
				height:@base*5rem;
				margin:0 @base*1.5rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-between;
				align-items: center;
				
				
				>b{
					font-size:@base*1.7rem;
				}
				>span{
					font-size: @base*1.5rem;
					>img{
						width:@base*1rem;
						height:@base*1.4rem;
					}
				}
			}			
		}
		
		>#Deliver-goods-section{
			margin-top:@base*3rem;
			width:100%;
			>p{
				margin:0 @base*1.5rem;
			}
			input{
				width:100%;
				font-size:@base*1.5rem;
				margin-top:@base*3.3rem;
				border-bottom:1px solid #000;
			}
			#sect-divs{
				margin:0 @base*1.5rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-between;
				align-items: center;
			}
			#sect-left{
				width:75%;
			}
			#sect-right{
				width:25%;
				border:1px solid;
				height:@base*11rem;
				border-top:none;
				text-align:center;
				>img{
					margin-top:@base*1.6rem;
					width:70%;
					height:60%;
				}
				>p{
					width:100%;
					font-size:@base*1rem;
					text-align: center;
				}
			}
			#yes{
				margin:@base*4.7rem @base*1.5rem @base*5rem @base*1.5rem;
				background:#999;
				text-align: center;
				line-height: @base*4.1rem;
				color:#fff;
				border-radius:@base*0.6rem
			}
			#sect-btom{
				margin:0 @base*1.5rem;
				margin-bottom:@base*1.8rem;
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-around;
				align-items: center;
				height:@base*3.8rem;
				border:1px solid #ccc;
				border-radius:@base*1rem;
				overflow: hidden;
				li:first-child{
					background:#ccc;
				}
				li{
					text-align: center;
					width:50%;
					height:100%;
					line-height: @base*3.8rem;
					border-left:1px solid #ccc;
				}
			}
			#tab{
				width:100%;
				>div{
					width:100%;
					height:@base*18rem;
					.mgn-p{
						margin:0 @base*1.5rem;
						width:100%;
						border-top:1px solid #eee;
						border-bottom:1px solid #eee;
						display:flex;
						flex-flow:row nowrap;
						justify-content: space-between;
						align-items: center;
						height:@base*3.6rem;
						margin-bottom:@base*0.9rem;
						>img{
							width:4%;
							height:@base*2rem;
							margin:@base*0.8rem  @base*1.5rem @base*0.9rem  @base*0.3rem;
						}
						>div{
							
							width:96%;
							>p{
								color:#666;
								>span{
									color:#666;
								}
							}
							>p:first-child{
								font-size:@base*1.4rem;
							}
							>p:nth-child(2){
								font-size:@base*1.2rem;
							}
						}
					}
				}
				#tab-one{
					
				}
				#tab-two{
					display:none;
				}
				#tab-thr{
					display:none;
				}
			}
		}
		
		
	}
</style>