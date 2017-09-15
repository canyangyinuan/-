<template>
	<div id="login">
		<div class="logo">
			<img src="../../assets/logo.png" alt="" />
		</div>
		<ul class='login-method'>
			<li @click="dipyCode($event)" class="active">快速登陆</li>
			<li @click="dipyPass($event)">密码登陆</li>
		</ul>
		<div class='tab-method'>
			<form action="" id="fast-login" style="display:block">
				<div class="phone">
					<input required type="text" name="telphone" id="telphone" placeholder="请输入手机号" @blur="checkPhone($event)"/>
				</div>
				<div class="verificationCode">
					<input required type="text" @blur="coshow($event)" name="verificationCode" id="verificationCode" placeholder="请输入验证码" /><button id=
					"code" @click="sendCode($event)">获取验证码</button>
				</div>
				<section class='clear' id='no-log'>
					<p class='float_R'>还没帮帮号<span>去注册</span></p>
				</section>
				<button id='log-btn'>登陆</button>
			</form>
			<form action="" id="pass-login">
				<div class="phone">
					<input required type="text" name="telphone" id="telphone" @blur="checkPhone($event)" placeholder="请输入登陆账号" />
				</div>
				<div class="password">
					<input required @blur="passcde($event)" type="password" name="password" id="password" placeholder="请输入登陆密码" /><img @click="zhen($event)" src="../../assets/闭眼.png"/>
				</div>
				<section class='clear' id='no-log'>
					<p class='float_R'>还没帮帮号<span>去注册</span></p>
				</section>
				<button id='log-btn'>登陆</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			checkPhone(e){
	    	var tel = e.target;
	    	var telPhone = /^1[3578]\d{9}$/;
		    if(!(telPhone.test(tel.value))){ 
		        alert("手机号码有误，请重填"); 
		        tel.value = ""
				}else{
					document.getElementById("code").style.backgroundColor = "black"
				}
			},
			coshow(e){
				if(e.target.parentNode.previousElementSibling.firstElementChild.vlaue !== "" && e.target.value !== ""){
					e.target.parentNode.nextElementSibling.nextElementSibling.style.backgroundColor = "#000"
				}else{
					e.target.parentNode.nextElementSibling.nextElementSibling.style.backgroundColor = "#999"
					
				}
			},passcde(e){
				var passzd =/^[a-zA-Z\d]{6,16}$/;
				if(e.target.parentNode.previousElementSibling.firstElementChild.vlaue !== "" && e.target.value !== "" && passzd.test(e.target.value)){
						e.target.parentNode.nextElementSibling.nextElementSibling.style.backgroundColor = "#000"
					}else{
						
						e.target.parentNode.nextElementSibling.nextElementSibling.style.backgroundColor = "#999";
						alert("密码格式错误，请重填"); 
					}
				
			},sendCode(e){
				if(e.target.parentNode.previousElementSibling.firstElementChild.vlaue !== ""){
					var a = 60;
					var timer;
					timer = null;
					timer = setInterval(function(){
					e.target.style.disabled = "disabled";
					e.target.style.backgroundColor = "#999";
					a--;
					e.target.innerText = "已发送("+a+")";
					if(a == 0){
						e.target.style.disabled = "false";
						e.target.style.backgroundColor = "#000";
						clearInterval(timer);
						e.target.innerText = "重新获取";
						}
					},1000)
					
				}else{
					e.target.style.disabled = "disabled";
					e.target.innerText = "获取验证码";
					e.target.style.backgroundColor = "#999";
				}
			},zhen(e){
				console.log(e.target.previousSibling.placeholder);
				if(e.target.previousSibling.type == "password"){
					e.target.previousSibling.type = "text";
					e.target.src = "../../assets/open.png"
				}else{
					e.target.previousSibling.type = "password";
					e.target.setAttribute("src","../../assets/闭眼.png")
				}		
			},dipyCode(e){
				e.target.nextElementSibling.style.color = "#666";
				e.target.style.color = "#111111";
				document.getElementById("fast-login").style.display = "block";
				document.getElementById("pass-login").style.display = "none";
			},dipyPass(e){
				 e.target.previousElementSibling.style.color = "#666";
				 e.target.style.color = "#111";
				 document.getElementById("fast-login").style.display = "none";
				 document.getElementById("pass-login").style.display = "block";
			}


		}
	}
</script>

<style lang="less">
	@import "../../../static/less/var.less";
	#login{
		width: 100%;
		height: 100%;
		background: #fff;
		.logo{
			width:@base*6.8rem;
			height:@base*5.6rem;
			margin:@base*6rem auto @base*5rem auto;
			img{
				width: 100%;
				height: 100%;
			}
		}
		>ul{
			width: 100%;
			display: flex;
			justify-content: center;
			margin-left: @base*-2rem;
			li{
				margin-left: @base*2rem;
				font-size: @base*1.6rem;
				color:#666666;
			}
			.active{
				color:#111111;
			}
		}
		form{
			width:100%;
			padding: 0 @base*2.5rem;
			display: none;
			div{
				width: 100%;
				border-bottom: @base*.1rem solid #111111;
				margin-top:@base*4.5rem;
				display:flex;
				input{
					font-size: @base*1.7rem;
					color:#999;
					opacity:.6;	
					flex-grow:1;	
				}
			}
			.verificationCode{
				>button{
					width:@base*11rem;
					height:@base*2.6rem;
					border:@base*.1rem solid #ccc;
					background:#999999;
					border-radius:@base*1.3rem;			
					font-size:@base*1.3rem;
					color:#fff;	
					margin-top:@base*-.5rem;
				}
			}
			.password{
				img{	
					width: @base*2.4rem;
					height: @base*1.1rem;
					margin-right: @base*1rem;
					margin-top: @base*1rem;
				}
			}
			#no-log{
				width: 100%;
				padding-top: @base*1.5rem;
				p{
					font-size: @base*1rem;
					color:#999999;
					span{
						color:#00AFFC;
					}
				}
				
			}
			#log-btn{
				width:100%;
				height: @base*3.6rem;
				background:#999999;
				color:#fff;
				border-radius:@base*.5rem;
				margin-top:@base*5rem;
			}
		}
	}
	
</style>