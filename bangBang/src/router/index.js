import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
	linkActiveClass: "active",
	/*开启html5 history模式*/
	mode: "history",
 	routes: [
  	{
  		/*path*/
      path: '/',
      /*重定向*/
      redirect : "/run"
    },{
      path: '/run',
      /*死写法*/
      component: resolve => { require([ "@/page/run"], resolve)},
      meta:{
		title:'启动页'
	  }
    },{
      path: '/signIn',
      /*死写法*/
      component: resolve => { require([ "@/page/signIn"], resolve)},
      meta:{
		title:'注册登陆选择页'
	  }
    },{
      path: '/login',
      /*死写法*/
      component: resolve => { require([ "@/page/template/login"], resolve)},
      meta:{
		title:'登陆页'
	  }
    },{
      path: '/registration',
      /*死写法*/
      component: resolve => { require([ "@/page/template/registration"], resolve)},
      meta:{
		title:'注册页'
	  }
    },{
      path: '/homePage',
      /*死写法*/
      component: resolve => { require([ "@/page/homePage"], resolve)},
      meta:{
		title:'首页'
	  }
    },{
      path: '/myOrder',
      redirect : "/myOrder/allOrder",
      component: resolve => { require([ "@/page/myOrder"], resolve)},
      children:[
      	{ path: "allOrder", component: resolve => { require([ "@/page/template/allOrder"], resolve)} },
    	{ path: "progress", component: resolve => { require([ "@/page/template/progress"], resolve)} },
    	{ path: "toComplete", component: resolve => { require([ "@/page/template/toComplete"], resolve)} },
    	{ path: "cancel", component: resolve => { require([ "@/page/template/cancel"], resolve)} }
      ],
      meta:{
		title:'我的订单'
	  }
    },{
      path: '/myWallet',
      component: resolve => { require([ "@/page/myWallet"], resolve)},
      meta:{
		title:'我的钱包'
	  }
    },{
      path: '/inviteFriends',
      redirect : "/inviteFriends/select",
      component: resolve => { require([ "@/page/inviteFriends"], resolve)},
      children:[
      	{ path: "select", component: resolve => { require([ "@/page/template/select"], resolve)} },
    	{ path: "placeTheOrder", component: resolve => { require([ "@/page/template/placeTheOrder"], resolve)} },
    	{ path: "becomeAHelper", component: resolve => { require([ "@/page/template/becomeAHelper"], resolve)} },
      ],
      meta:{
		title:'邀请好友'
	  }
    },{
      path: '/setTheCenter',
      component: resolve => { require([ "@/page/setTheCenter"], resolve)},
      meta:{
		title:'设置'
	  }
    },{
      path: '/myMessage',
      component: resolve => { require([ "@/page/myMessage"], resolve)},
      meta:{
		title:'我的消息'
	  }
    },{
      path: '/commonAdressManagement',
      component: resolve => { require([ "@/page/commonAdressManagement"], resolve)},
       children:[
      	{ path: "addAdress", component: resolve => { require([ "@/page/template/addAdress"], resolve)} }
      ],
      meta:{
		title:'我的地址'
	  }
    },{
      path: '/selectCity',
      component: resolve => { require([ "@/page/template/template/selectCity"], resolve)},
      meta:{
		title:'选择城市'
	  }
    },{
      path: '/sendAnAddress',
      redirect : "/sendAnAddress/historyAdress",
      component: resolve => { require([ "@/page/template/sendAnAddress"], resolve)},
      children:[
      	{ path: "historyAdress", component: resolve => { require([ "@/page/template/historyAdress"], resolve)} },
    	{ path: "theCommonlyUsedAdress", component: resolve => { require([ "@/page/template/theCommonlyUsedAdress"], resolve)} }
      ],
      meta:{
		title:'寄件地址'
	  }
    },{
      path: '/sendDetail',
      component: resolve => { require([ "@/page/template/sendDetail"], resolve)},
      meta:{
		title:'寄件信息'
	  }
    },{
      path: '/Deliver-goods',
      component: resolve => { require([ "@/page/template/Deliver-goods"], resolve)},
      meta:{
		title:'收货'
	  }
    },{
      path: '/Goods-receipt',
      component: resolve => { require([ "@/page/template/Goods-receipt"], resolve)},
      meta:{
		title:'发货'
	  }
    },{
      path: '/package',
      component: resolve => { require([ "@/page/template/package"], resolve)},
      meta:{
		title:'是否需要包裹'
	  }
    },{
      path: '/coupon',
      component: resolve => { require([ "@/page/template/coupon"], resolve)},
      meta:{
		index:23
	  }
    },{
      path: '/Price-description',
      component: resolve => { require([ "@/page/template/Price-description"], resolve)},
      meta:{
		title:'价格说明'
	  }
    },{
      path: '/head-portrait',
      component: resolve => { require([ "@/page/template/head-portrait"], resolve)},
      meta:{
		title:'头像'
	  }
    },{
      path: '/clicks',
      component: resolve => { require([ "@/page/template/template/clicks"], resolve)},
      meta:{
		title:'个人信息-点击查看'
	  }
    },{
      path: '/Item-type',
      component: resolve => { require([ "@/page/template/Item-type"], resolve)},
      meta:{
		title:'物品类型'
	  }
    },{
      path: '/submit',
      component: resolve => { require([ "@/page/template/submit"], resolve)},
      meta:{
		title:'提交'
	  }
    },{
      path: '/recharge',
      component: resolve => { require([ "@/page/template/recharge"], resolve)},
      meta:{
		title:'充值'
	  }
    },{
      path: '/cashWithdrawal',
      component: resolve => { require([ "@/page/template/cashWithdrawal"], resolve)},
      meta:{
		title:'提现'
	  }
    },{
      path: '/myWalletCoupons',
      component: resolve => { require([ "@/page/template/myWalletCoupons"], resolve)},
      meta:{
		title:'优惠券'
	  }
    },{
      path: '/transactionDetails',
      component: resolve => { require([ "@/page/template/transactionDetails"], resolve)},
      meta:{
		title:'交易明细'
	  }
    },{
      path: '/thePriceThat',
      component: resolve => { require([ "@/page/template/thePriceThat"], resolve)},
      meta:{
		title:'价格说明'
	  }
    },{
      path: '/rechargeCoupons',
      component: resolve => { require([ "@/page/template/template/rechargeCoupons"], resolve)},
      meta:{
		title:'充值优惠券'
	  }
    },{
      path: '/feedback',
      component: resolve => { require([ "@/page/template/feedback"], resolve)},
      meta:{
		title:'意见反馈'
	  }
    },{
      path: '/aboutUs',
      component: resolve => { require([ "@/page/template/aboutUs"], resolve)},
      meta:{
		title:'关于我们'
	  }
    },{
      path: '/deliver-child',
      component: resolve => { require([ "@/page/template/template/deliver-child"], resolve)},
      meta:{
		title:'发货地址'
	  }
    }
  ]
})
router.afterEach(( to, from, next) => {
	window.document.title = to.meta.title ? to.meta.title : "帮帮" ;
})
export default router;