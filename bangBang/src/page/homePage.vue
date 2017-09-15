<template>
	<!--template下必须有一个大盒子，否则会报错-->
	<!--动态属性属性前需要加冒号-->
	<div id="home-page-wrapper" :class=" navShow ? 'sport' : ''">
		<div id="home-page-left">
			<router-link to="/head-portrait" tag="li">
				<div id="head-portrait" class='clear'>
					<div class='picture float_L'><img src="../assets/头像.png" alt="" /></div>
					<div class='username float_L'>
						<p>帮帮用户</p>
						<p>15510124666</p>
					</div>
				</div>
			</router-link>
			<ul id="menu">
				<!--路由-->
				<router-link to="/myOrder" tag="li">
					<img class='order' src="../assets/订单.png" alt="" />
					<span>我的订单</span>
				</router-link>
				<router-link to="/myWallet" tag="li">
					<img class='wallet' src="../assets/钱包.png" alt="" />
					<span>我的钱包</span>
				</router-link>
				<router-link to="/myMessage" tag="li">
					<img class='message' src="../assets/消息.png" alt="" />
					<span>我的消息</span>
				</router-link>
				<router-link to="/commonAdressManagement" tag="li">
					<img class='address' src="../assets/地址.png" alt="" />
					<span>常用地址管理</span>
				</router-link>
				<router-link to="/inviteFriends" tag="li">
					<img class='invite' src="../assets/邀请.png" alt="" />
					<span>邀请好友</span>
				</router-link>
				<router-link to="/setTheCenter" tag="li">
					<img class='set' src="../assets/设置.png" alt="" />
					<span>设置中心</span>
				</router-link>
				<!--二级路由参照如下写法
					<router-link tag="div" :to="{ path: '/shop/merchants', query:{ id: $route.query.id} } ">
						商品
					</router-link>
					<router-link tag="div" :to="{ path: '/shop/evaluation', q
						uery:{ id: $route.query.id} } ">
						评价
					</router-link>
					
					query为路由传参，在被路由组件中，参数的获取方法是:
						$scope.router.query.参数  例:$scope.router.query.id
					可以在data里直接赋值给一个量，如
					data() {
						return {
							ccc : $scope.router.query.id
						}
					}
					或者在mounted/methods等里面:
					mounted() {
						this.ccc = $scope.router.query.id
					}
				-->
			</ul>
		</div>
		<div id="home-page-right">
			<div id="yindao">
				<img src="../assets/loge.png" alt="" />
			</div>

			<header id="home-page-header">
				<div>
					<img src="../assets/我的.png" id="user" class="iconfont icon-wode" @click="showNav()"></img>
					<p>帮帮</p>
					<span style="color:#fff;">身份切换</span>
				</div>
			</header>
			<div class="swiper-container nav-swiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="banner in banners">
						<img :src="banner" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<!--发货、收货-->
			<div class='send-collect'>
				<dl class='clear'>
					
						<dt class='float_L'><img src="../assets/发.png" alt="" /></dt>
						<dd class='float_L bor-one'><router-link to="/Deliver-goods"><input type="text" disabled placeholder="请完善发货人信息" />
							<i></i></router-link>
						</dd>
					
				</dl>
				<dl class='clear'>
					
						<dt class='float_L'><img src="../assets/收.png" alt="" /></dt>
						<dd class='float_L'><router-link to="/Goods-receipt"><input disabled type="text" placeholder="请选择收货人地址" />
							<i></i></router-link>
						</dd>
					
				</dl>
			</div>
			<!--物品类型-->
			<div class='goods-type'>
				<dl class='clear'>
					<router-link to="/Item-type">
						<dt class='float_L'>物品类型</dt>
						<dd class='float_R'><span>请选择物品类型</span><i></i></dd>
					</router-link>

				</dl>
				<dl class='clear slide' @click="weightShow()">
					<dt class='float_L'>物品重量</dt>
					<dd class='float_R'><span>5公斤以下</span><i></i></dd>
				</dl>
				<dl class='clear' @click="pickupShow()">
					<dt class='float_L'>取件时间</dt>
					<dd class='float_R'><span>立即取件</span><i></i></dd>
				</dl>
				<dl class='clear'  @click="packageShow()">
					<dt class='float_L'>是否需要包裹</dt>
					<dd class='float_R'><span>是</span><i></i></dd>
				</dl>
			</div>
			<div id="section">
				<ul>
					<li>
						<router-link to="/coupon">
							<img src="../assets/优惠劵.png" alt="" />
							<span>优惠券</span>
						</router-link>

					</li>
					<li @click="fareShow()">
						<img src="../assets/钱.png" alt="" />
						<span>我要加价</span>
					</li>
				</ul>
				<router-link to="/Price-description">
					<p>查看计价规则</p>
				</router-link>

			</div>
			<div id="footer">
				<ul>
					<li>￥<span>16</span></li>
					<li><span>2</span>公里</li>
					<li><span>5</span>公斤</li>
					<li class="iconfont icon-jiantou1"></li>
				</ul>

				<span><router-link to="/submit" style="color:#fff">提交</router-link></span>

			</div>
		</div>
		<div id="weight" class="modal">
			<div class="bot-top">

			</div>
			<div class="bot-h">
				<p>
					<span class="quxiao" @click="weightHide()">取消</span>
					<span class="xuanze">选择物品重量</span>
					<span class="yes">确定</span>
				</p>
				<div class="num">
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper" >
							<li class="swiper-slide tab" v-for="num in nums" @click="seletChecked($event)" >
								{{num}}公斤 
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="package" class="modal">
			<div class="bot-top">

			</div>
			<div class="bot-h">
				<p>
					<span class="quxiao" @click="packageHide()">取消</span>
					<span class="xuanze">是否需要包裹</span>
					<span class="yes">确定</span>
				</p>
				<div class="num">
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper">
							<li class="swiper-slide" v-for="pack in packs">
								{{pack}}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
		<div id="pickup" class="modal">
			<div class="bot-top">

			</div>
			<div class="bot-h">
				<p>
					<span class="quxiao" @click="pickupHide()">取消</span>
					<span class="xuanze">选择取货时间</span>
					<span class="yes">确定</span>
				</p>
				<div class="num">
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper">
							<li class="swiper-slide" v-for="day in days">
								{{day}}
							</li>
						</ul>
					</div>
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								立即取货
							</li>
							<li class="swiper-slide" v-for="time in times">
								{{time}}点
							</li>
						</ul>
					</div>
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper">
							<li class="swiper-slide" v-for="branch in branchs">
								{{branch}}分
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="fare" class="modal">
			<div class="bot-top">

			</div>
			<div class="bot-h">
				<p>
					<span class="quxiao" @click="fareHide()">取消</span>
					<span class="xuanze">加价金额</span>
					<span class="yes">确定</span>
				</p>
				<div class="num">
					<div class="swiper-container num-swiper">
						<ul class="swiper-wrapper">
							<li class="swiper-slide" v-for="fare in fares">
								{{fare}}元
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
  /*数据*/
  data() {
  return {
  navShow: false,
  banners: ['http://image.jiantuku.com/17-9-15/10267018.jpg?attname=file_1505438430705_dfd.png&e=1505439610&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:mWrwY2u3HglPH774qyj-uFCX0aA=','http://image.jiantuku.com/17-9-15/10267018.jpg?attname=file_1505438430705_dfd.png&e=1505439610&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:mWrwY2u3HglPH774qyj-uFCX0aA=','http://image.jiantuku.com/17-9-15/10267018.jpg?attname=file_1505438430705_dfd.png&e=1505439610&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:mWrwY2u3HglPH774qyj-uFCX0aA='],
  nums: ['5', '6', '7', '8', '9', '10', '11', '12'],
  packs:["是","否"],
  days:["今天","明天","后天"],
  times:["16","17","18","19","16","17","18","19"],
  branchs:["0","15","30","45","15","30","45","15","30","45"],
  fares:["0","5","10","15","20","25","30","35","40"]
  }
  },
  /*事件*/
  methods: {
  showNav() {
  this.navShow = !this.navShow;
  },
  weightShow(){
  var weight = document.getElementById("weight");
  weight.style.top = 0;
  setTimeout(function(){
  weight.style.opacity = 1;
  },150)
  },
  weightHide(){
  var weight = document.getElementById("weight");
  weight.style.opacity = 0;
  weight.style.transition = ".2s";
  setTimeout(function(){
  weight.style.top = "100%";
  },100)
  },
  packageShow(){
  var pack = document.getElementById("package");
  pack.style.top = 0;
  setTimeout(function(){
  pack.style.opacity = 1;
  },150)
  },
  packageHide(){
  var pack = document.getElementById("package");
  pack.style.opacity = 0;
  pack.style.transition = ".2s";
  setTimeout(function(){
  pack.style.top = "100%";
  },100)
  },
  pickupShow(){
  var packup = document.getElementById("pickup");
  pickup.style.top = 0;
  setTimeout(function(){
  pickup.style.opacity = 1;
  },150)
  },
  pickupHide(){
  var pickup = document.getElementById("pickup");
  pickup.style.opacity = 0;
  pickup.style.transition = ".2s";
  setTimeout(function(){
  pickup.style.top = "100%";
  },100)
  },
  fareShow(){
  var fare = document.getElementById("fare");
  fare.style.top = 0;
  setTimeout(function(){
  fare.style.opacity = 1;
  },150)
  },
  fareHide(){
  var fare = document.getElementById("fare");
  fare.style.opacity = 0;
  fare.style.transition = ".2s";
  setTimeout(function(){
  fare.style.top = "100%";
  },100)
  },
  change(){

  },
  seletChecked(e){
  //				console.log(e.target.innerHTML);
  //				console.log(e.target.offsetTop);
  console.log(e.target.parentNode.parentNode.offsetTop)
  //				e.target.offsetTop = 0;
  console.log(e.target.parentNode.offsetTop);
  console.log(e.target.offsetTop);
  }

  },
  /*组件生命周期，常用为mounted(组件创建后但未渲染之前)和created(组件未创建之前)*/
  mounted() {
  new Swiper('.nav-swiper', {
  pagination: ".swiper-pagination",
  autoplay: 3000,
  autoplayDisableOnInteraction: false,
  loop: true
  });

  new Swiper('.num-swiper', {
  // pagination:".swiper-pagination",
  direction: "vertical"
  // autoplay : 5000,
  // autoplayDisableOnInteraction:false,
  // loop:true
  });
  }
  }
</script>

<style lang="less">
	@import "../../static/less/var.less";
	/*@import "../../static/pingfangziti/苹方黑体-细-简.ttf";*/
	
	#yindao {
		width: 100%;
		height: 100%;
		background: #fff;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 200;
		transform: translateX(100%);
		text-align: center;
	}
	
	#yindao img {
		margin-bottom: -150%;
	}
	
	#home-page-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		background: #f3f3f3;
		position: relative;
		overflow: hidden;
		#home-page-left {
			width: @base*30rem;
			height: 100%;
			position: absolute;
			right: 100%;
			top: 0;
			z-index: 1000;
			transform: translateX(@base*0rem);
			transition: transform .5s;
			background: #fff;
			box-shadow: -@base*.1rem @base*.1rem @base*.1rem #ccc;
			border-right: @base*.1rem solid #DCDCDC;
			#head-portrait {
				width: 100%;
				padding: @base*3.3rem 0 @base*3.3rem @base*5.5rem;
				border-bottom: @base*.1rem solid #DCDCDC;
				.picture {
					width: @base*5.8rem;
					height: @base*5.8rem;
					border: 1px solid #ccc;
					border-radius: 50%;
					img {
						width: @base*3.4rem;
						height: @base*3.6rem;
						margin-top: @base*.5rem;
						margin-left: @base*1rem;
					}
				}
				.username {
					margin-left: @base*1.5rem;
					margin-top: @base*.5rem;
					p {
						font-size: @base*1.6rem;
						color: #333;
					}
					p:last-child {
						font-size: @base*1.5rem;
					}
				}
			}
			#menu {
				width: 100%;
				padding-left: @base*5.1rem;
				li {
					margin-top: @base*3.5rem;
					img {
						vertical-align: middle;
					}
					.order {
						width: @base*1.4rem;
						height: @base*1.6rem;
					}
					.wallet {
						width: @base*1.5rem;
						height: @base*1.5rem;
					}
					.message {
						width: @base*1.6rem;
						height: @base*1.5rem;
					}
					.address {
						width: @base*1.8rem;
						height: @base*1.6rem;
					}
					.invite {
						width: @base*1.6rem;
						height: @base*1.6rem;
					}
					.set {
						width: @base*1.7rem;
						height: @base*1.7rem;
					}
					span {
						margin-left: @base*2.1rem;
					}
				}
			}
		}
		#home-page-right {
			width: 100%;
			transform: translateX(@base*0rem);
			transition: transform .5s;
		}
		&.sport>#home-page-right,
		&.sport>#home-page-left {
			transform: translateX(@base*27.5rem);
		}
	}
	
	#home-page-header {
		width: 100%;
		height: @base*4.4rem;
		line-height: @base*4.4rem;
		background: #333;
		position: relative;
		>div {
			margin: 0 @base*1.5rem;
			height: 100%;
			color:#fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			>p {
				color: #fff;
				text-align: center;
				font-size: @base*1.6rem;
			}
			>img{
				width:@base*1.3rem;
				height:@base*1.6rem;
				color: #fff;
			}
			>span{
				color:#fff;
				font-size:@base*1.4rem;
			}
		}
	}
	
	.nav-swiper {
		width: 100%;
		img {
			width: 100%;
			height: @base*15rem;
		}
	}
	
	.send-collect {
		width: 100%;
		margin-top: @base*.5rem;
		background: #fff;
		// router-link{
		// 	width:100%;
		// 	background: #fff;
		// 	display:flex;
		// 	flex-flow:row nowrap;
		// 	justify-content: space-between;
		// 	align-items: center;
		// }
		dl {
			width: 100%;
			position: relative;
			display: flex;
			dt {
				width: @base*5rem;
				height: @base*5rem;
				padding-top: @base*1.5rem;
				img {
					width: @base*2.4rem;
					height: @base*3.1rem;
					margin: @base*-.5rem 0 0 @base*1rem;
				}
			}
			dd {
				width: 100%;
				padding: @base*1.5rem 0;
				position: relative;
				input {
					width: 100%;
					font-size: @base*1.7rem;
					color: #999999;
					background:#fff;
				}
				i {
					position: absolute;
					top: @base*2rem;
					right: @base*1rem;
					width: @base*.9rem;
					height: @base*1.6rem;
					display: inline-block;
					background: url(../assets/right.png) no-repeat;
					background-size: 100% 100%;
				}
			}
			.bor-one {
				border-bottom: @base*.1rem solid #DCDCDC;
			}
		}
	}
	
	.goods-type {
		width: 100%;
		margin-top: @base*.5rem;
		background: #fff;
		dl {
			width: 100%;
			padding: @base*1.5rem 0;
			border-bottom: @base*.1rem solid #DCDCDC;
			position: relative;
			dt {
				width: @base*10rem;
				padding-left: @base*1rem;
				color: #111111;
				font-size: @base*1.5rem;
			}
			dd {
				font-size: @base*1.5rem;
				color: #999999;
				padding-right: @base*1rem;
				position: relative;
				span {
					padding-right: @base*2rem;
				}
				i {
					position: absolute;
					top: @base*.2rem;
					right: @base*1rem;
					width: @base*.9rem;
					height: @base*1.6rem;
					display: inline-block;
					background: url(../assets/right.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
	
	#section {
		width: 100%;
		height: @base*6rem;
		margin-top: @base*0.3rem;
		font-size: 0.15rem;
		color: #111;
	}
	
	#section ul {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		/*align-items: center;*/
	}
	
	#section ul li {
		width: 50%;
		height: 100%;
		line-height: @base*6rem;
		border: 1px solid #e3e3e3;
		text-align: center;
		background: #fff;
		align-items: center;
	}
	
	#section ul li span {
		color: #999;
	}
	
	#section ul li img {
		width: 9%;
		height: 23%;
		margin-top: @base*2rem;
	}
	
	#section p {
		text-align: center;
		font-size: @base*1.2rem;
		color: #B3B3B3;
		margin-top: @base*2rem;
	}
	
	#footer {
		width: 100%;
		height: @base*4.5rem;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		display: none;
		justify-content: space-between;
		background: #fff;
	}
	
	#footer ul {
		width: 40%;
		height: 100%;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		li {
			color: #666;
			font-size: @base*1.2rem;
		}
		>li:first-child {
			color: #000;
			font-size: @base*1.6rem;
		}
	}
	
	#footer>span {
		width: 20%;
		height: 100%;
		line-height: @base*5rem;
		text-align: center;
		background: #000;
		color: #fff;
	}
	
	.modal {
		width: 100%;
		height:100%+@base*22.6rem;
		position: absolute;
		top:100%;
		display: flex;
		flex-flow: column nowrap;
		/*flex-direction:initial;*/
		.bot-top {
			background: #000;
			opacity: 0.2196078431372549;
			height: 100%;
		}
		.bot-h {
			background: #fff;
			opacity: 1;
			width: 100%;
			p{
			padding: 0 @base*1.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			line-height: @base*4.1rem;
			background: #f8f8f8;
				.quxiao {
					color: #999;
					font-size: @base*1.4rem;
				}
				.xuanze {
					color: #111;
					font-size: @base*1.6rem;
				}
				.yes {
					color: #00b2ff;
					font-size: @base*1.4rem;
				}
			}
			.num{
				width: 100%;
				text-align: center;
				background: #fff;
				overflow: hidden;
				.swiper-container {
					border: 1px solid #ccc;
					line-height: @base*3rem ;
					background: #fff;
					height: @base*3rem;
					margin: @base*6rem 0;
					overflow: visible;
					>ul{
						width:100%;
						height: @base*3rem*8;	
					}
				}
			}
			
		}
		
		
	}
	#pickup{
		>.bot-h{
			>.num{
				display:flex;
				flex-flow:row nowrap;
				justify-content: space-around;
				align-items: center;
				>.num-swiper{
					width:33.333333333333333333%;
					border-left:none;
					border-right:none;
				}
			}
		}
	}
</style>
