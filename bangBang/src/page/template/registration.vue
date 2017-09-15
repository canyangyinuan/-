<template>
	<div id="registration">
		<header-wrapper :text="'注册'"></header-wrapper>
		<form action="">
			<div class="phone">
				<input type="text" name="telphone" id="telphone" value="请输入手机号" required @click="nul($event)" @blur="checkPhone($event)"/>
			</div>
			<div class="verificationCode">
				<input type="text" name="verificationCode" id="verificationCode" value="请输入验证码"  required @click="nul($event)"/><input type="button" name="code" id="code" value="获取验证码" />
			</div>
			<div class="password">
				<input type="password"  @blur="blur($event)" name="password" id="password" required placeholder="请设置密码(6-16,数字和英文组成)"  /><img src="../../assets/闭眼.png" @click="zhen($event)" />
			</div>
			<div class="invite">
				<input type="text" name="invite-phone" id="invite-phone" placeholder="请输入邀请人手机号(选填)"  @blur="checkPhone($event)" />
			</div>
			<input type="submit" name="reg-btn" id="reg-btn" value="提交" />
		</form>
	</div>
</template>

<script>
	import headerWrapper from "@/components/header"
	export default{
		components:{
			headerWrapper
		},
		methods:{
			blur(e){
				var oTel = document.getElementById("telphone");
				var oVer = document.getElementById("verificationCode");
				var oPass = e.target;
				var oBtn = document.getElementById("reg-btn");

				var passzd =/^[a-zA-Z\d]{6,16}$/;
			    if(!(passzd.test(oPass.value))){ 
			        alert("密码格式错误，请重填"); 
				}


				if(oTel.value !== "" && oVer.value !== "" && oPass.value !== ""){
					oBtn.style.backgroundColor = "black";
					oBtn.style.disabled = "none";
				}else{
					oBtn.style.backgroundColor = "#999";
					oBtn.style.disabled = "disabled";
				}
			},
			nul(e){
				e.target.value = ""
			},
			checkPhone(e){
	    	var tel = e.target;
	    	var telPhone =/^1[3578]\d{9}$/;
		    if(!(telPhone.test(tel.value))){ 
		        alert("手机号码有误，请重填"); 
		        tel = ""
				}
			},
			zhen(e){
				console.log(e.target.previousSibling.placeholder);
				if(e.target.previousSibling.type == "password"){
					e.target.previousSibling.type = "text";
					e.target.src = "../../assets/open.png"
				}else{
					e.target.previousSibling.type = "password";
					e.target.setAttribute("src","../../assets/闭眼.png")
				}
								
			}

		
		}
	}
</script>

<style lang="less">
	@import "../../../static/less/var.less";
	#registration{
		width: 100%;
		height: 100%;
		background: #fff;
		form{
			width:100%;
			padding: 0 @base*1.5rem;
			div{
				width: 100%;
				border-bottom: @base*.1rem solid #111111;
				margin-top:@base*5rem;
				display:flex;
				input{
					font-size: @base*1.7rem;
					color:#999;
					opacity:.6;	
					flex-grow:1;	
				}
			}
			.verificationCode{
				#code{
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
			#reg-btn{
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