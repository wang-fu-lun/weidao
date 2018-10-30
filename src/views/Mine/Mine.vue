<template>
  <div class="Mine_all">
    <div class="Mine_header">
      <img :src="gg" class="bgg">
    </div>
    <div class="arow">
      <div class="name">
        <p>今晚你是我的人</p>

      </div>
      <div class="userimg">
        <img :src="bguser" class="usss">
      </div>
    </div>
    <div class="Mine_body">
      <div class="icon_nav">
        <ul>
          <li>
            <i class="iconfont icon-dingdan"></i><br>全部订单</li>
          <li>
            <i class="iconfont icon-gouwuche-mine"></i><br>待付款</li>
          <li>
            <i class="iconfont icon-im_naozhong"></i><br>待发货</li>
          <li>
            <i class="iconfont icon-wodedaipingjia"></i><br>收货/评价</li>
          <li>
            <i class="iconfont icon-tubiaozhizuomobandefuben-"></i><br>我的收藏</li>
          <li>
            <i class="iconfont icon-ziyuan"></i><br>优惠券</li>
        </ul>
      </div>
      <div class="lie">
        <ul>
          <li>
            <i class="iconfont icon-icon-test"></i>余额
            <span>0
              <i class="iconfont icon-you"></i>
            </span>

          </li>
          <li>
            <i class="iconfont icon-icon--"></i>红包
            <i class="iconfont icon-you"></i>
          </li>
          <li>
            <i class="iconfont icon-jifen"></i>积分
            <span>200
              <i class="iconfont icon-you"></i>
            </span>

          </li>
          <li>
            <i class="iconfont icon-jixuduihuan"></i>兑换
            <i class="iconfont icon-you"></i>
          </li>
          <li>
            <i class="iconfont icon-1"></i>分享赚
            <b>每单最高赚30%
              <i class="iconfont icon-you"></i>
            </b>

          </li>
          <li>
            <i class="iconfont icon-01"></i>分享赚商品
            <i class="iconfont icon-you"></i>
          </li>
          <li>
            <i class="iconfont icon-dizhi"></i>我的地址
            <i class="iconfont icon-you"></i>
          </li>
          <li>
            <i class="iconfont icon-fenxiang"></i>集市提货
            <i class="iconfont icon-you"></i>
          </li>
          <li>
            <i class="iconfont icon-01"></i>加入企业会员
            <i class="iconfont icon-you"></i>
          </li>
        </ul>
      </div>
      <div class="btn">
        <ul>
          <li>
            <i class="iconfont icon-kefu"></i>在线客服</li>
          <li>
            <i class="iconfont icon-dianhua2"></i>客服热线</li>
        </ul>
      </div>
      <div class="logout" @click="logout">
        退出登录
      </div>
      <div class="bottom">
        <p>客服电话：400-030-9527（每日 9:00-21:00）<br>Copyright © 2014-2017 味道网商城 版权所有.<br>京ICP备15031582号</p>
        <p></p>
      </div>
    </div>

  </div>
</template>

<script>
import './icon.scss'
export default {
  name: 'Mine',
  data () {
    return {
      gg: require('@/lib/img/mine/member-header-bg.png'),
      bguser: require('@/lib/img/mine/02.png')
    }
  },
  mounted () {

  },
  methods: {
    logout () {
      window.localStorage.removeItem('username')
      window.localStorage.removeItem('password')
      window.location.reload()
      this.$router.history.push('./login')
    }
  }
}
</script>

<style lang="scss" scoped>
.Mine_all {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f1eded;
  .Mine_header {
    width: 100%;
    position: relative;
    .bgg {
      width: 100%;
    }
  }
  .arow {
    position: absolute;
    top: 20px;
    width: 100%;
    height: 80px;

    .name {
      float: left;
      line-height: 80px;
      margin-left: 20px;
      font-size: 28px;
      color: #000;
    }
    .userimg {
      float: right;
      margin-right: 20px;
      .usss {
        width: 80px;
        height: 80px;
      }
    }
  }
  .Mine_body {
    width: 100%;
    flex: 1;
    margin: 0 auto;
    overflow-x: hidden;
    .icon_nav {
      ul {
        padding: 0px 20px;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        background: white;
        li {
          width: 25%;
          height: 80px;
          text-align: center;
          border-bottom: 1px solid #f1eded;
          .iconfont {
            font-size: 30px;
          }
          &:nth-child(5) {
            border: none;
          }
          &:nth-child(6) {
            border: none;
          }
        }
      }
    }
    .lie {
      width: 100%;
      height: auto;
      margin-top: 20px;
      ul {
        background: white;
        li {
          height: 60px;
          border-bottom: 1px solid #f1eded;
          line-height: 60px;
          .iconfont {
            float: left;
            font-size: 16px;
            color: #000;
            margin: 0px 15px;
          }
          span {
            float: right;
            font-size: 20px;
            color: #a7a7a7;
          }
          b {
            float: right;
            font-weight: 100;
            color: #a7a7a7;
          }
          .icon-you {
            float: right !important;
            font-size: 4px;
          }
        }
      }
    }
  }
  .btn {
    width: 100%;
    height: 50px;
    background: white;
    margin: 15px 0px;
    ul {
      width: 80%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
      li {
        width: 50%;
        height: 40px;
        line-height: 40px;
        margin-top: 5px;
        float: left;
        text-align: center;
        font-size: 16px;
        &:nth-child(1) {
          border-right: 1px solid rgb(221, 216, 216);
        }
        .iconfont {
          font-size: 22px;
          color: #000;
          margin-right: 5px;
        }
      }
    }
  }
  .logout {
    width: 100%;
    height: 40px;
    background: #ea4335;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    letter-spacing: 5px;
    margin-bottom: 15px;
  }
  .bottom {
    width: 100%;
    height: 100px;
    background: white;
    text-align: center;
    line-height: 25px;
    padding-top: 15px;
  }
}
</style>
