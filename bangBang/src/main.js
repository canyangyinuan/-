// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import VueAxios from "vue-axios"
import store from "./store/store"
//插件引入
import VueAwesomeSwiper from 'vue-awesome-swiper';
//插件引入后需要use一下
Vue.use(VueAxios,Axios)
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

//全局引入css样式
import "../static/less/base.css"
import "../static/iconfont/iconfont.css"
import "swiper/dist/css/swiper.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
