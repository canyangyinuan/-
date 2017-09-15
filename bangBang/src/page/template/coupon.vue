<template>
  <div id="coupon">
    <header>
      <div>
        <i class="iconfont icon-back" @click="back()"></i>
        <b>选择可用的优惠券</b>
        <i></i>
      </div>
    </header>
    <div id="section">
      <img src="../../assets/优惠劵 (2).png" alt="" />
      <p>您暂时还没有优惠券</p>
    </div>
    <div id="section-have">
      <div class="pun">
        <div class="pun-left">
          8折
        </div>
        <div class="pun-right">
          <ul>
            <p>折扣券</p>
            <li>有效期至2017-09-08</li>
            <li>限北京地区使用</li>
          </ul>
        </div>
      </div>
      <div class="pun">
        <div class="pun-left">
          5元
        </div>
        <div class="pun-right">
          <ul>
            <p>现金券</p>
            <li>有效期至2017-09-08</li>
            <li>限北京地区使用</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      history.back()
    }
  }
}
</script>

<style lang="less">
@import "../../../static/less/var.less";
#coupon {
  width: 100%;
  height: 100%;
  background: #fff;
  header {
    width: 100%;
    position: fixed;
    top: 0;
    >div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0 @base*1.5rem;
    }
    height:@base*4.3rem;
    border-bottom:1px solid #dcdcdc;
    >b {
      font-size: @base*1.7rem;
    }
  }
  #section {
    display: none;
    width: @base*14.4rem;
    height: @base*10.3rem;
    margin: 0 auto;
    margin-top: @base*24rem;
    text-align: center;
    >img {
      width: @base*10rem;
      height: @base*6.9rem;
      margin-bottom: @base*1.9rem;
    }
    >p {
      font-size: @base*1.5rem;
      color: #999;
      text-align: center;
    }
  }
  #section-have {

    margin-top: @base*6.3rem;
    padding: 0 @base*1.5rem;
    >.pun {
      width: 100%;
      height: @base*8.5rem;
      margin-top: @base*2rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      border-radius:@base*.5rem;
      box-shadow:2px 2px 10px #000;
      >.pun-left {
        width: 25%;
        height: 100%;
        background: url(http://image.jiantuku.com/17-9-15/27748908.jpg?attname=file_1505438439460_f28c.png&e=1505439610&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:PHQZ0NO49-w5gsG0kWtDE7GY-aI=) no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-size: @base*2rem;
        text-align: center;
        line-height: @base*8.5rem;
      }
      >.pun-right {
        width: 75%;
        height: 100%;
        background: url(http://image.jiantuku.com/17-9-15/44381658.jpg?attname=file_1505438396003_c08e.png&e=1505439610&token=el7kgPgYzpJoB23jrChWJ2gV3HpRl0VCzFn8rKKv:GFggmqtmTTMQT2xJ8EArJ5iB66g=) no-repeat;
        background-size: 110% 100%;
        background-position:10% top ;
        >ul {
          >p {
            margin-top: @base*1.9rem;
            font-size: @base*1.5rem;
            color: #11111;
          }
          margin-left:@base*3rem;

          >li {
            margin-left: @base*1.4rem;
            list-style: disc;
            color: #999;
            font-size: @base*1rem;
          }
        }
      }
    }
  }
}
</style>
