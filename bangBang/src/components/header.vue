<template>
	<header :style="headerStyle">
		<i class="iconfont icon-back" @click="back()"></i>{{text}}
		<i class="iconfont icon-search" @click="search()" v-if="searchShow"></i>
		<router-link v-if="buttonShow" tag="button" to="/commonAdressManagement/addAdress">添加</router-link>
		<router-link v-if="positionShow" tag="span" to="/selectCity">定位</router-link>
	</header>
</template>

<script>
	export default{	
		props:{
			/*接收传入的text值，并指定传入的值的类型*/
			text : {
				type : String
			},
			searchShow : this.searchShow ? this.searchShow : false,
			buttonShow : this.buttonShow ? this.buttonShow : false,
			positionShow : this.positionShow ? this.positionShow : false,
			headerStyle : {
				type : Object
			}
		},
		methods:{
			back() {
				history.back()
			},
			search() {
				console.log("搜索行为")
			}
		}
	}
</script>

<style lang="less">
	@import "../../static/less/var.less";
	header{
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		height: @base*4.4rem;
		line-height: @base*4.4rem;
		text-align: center;
		>i{
			position:absolute;
			&.icon-back{
				left:@base*.5rem;
				font-size: @base*3rem!important;
			}
			&.icon-search{
				right:@base*1rem;
				font-size: @base*2rem!important;
			}
			
		}
		>button{
			position: absolute;
			right:@base*1rem;
			top:@base*1rem;
			line-height:@base*2.4rem;
			width:@base*7rem;
			padding:@base.3rem @base*1rem;
			background:transparent;
			border:@base*.1rem solid #fff;
		}
		>span{
			position: absolute;
			right:@base*1rem;
		}
	}
</style>