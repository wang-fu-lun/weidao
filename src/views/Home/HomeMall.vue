<template>
  <div class="Mall_All">
    <div class="banner_mall">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img :src="banner1" class="mall_banner"></mt-swipe-item>
        <mt-swipe-item>
          <img :src="banner2" class="mall_banner"></mt-swipe-item>
        <mt-swipe-item>
          <img :src="banner3" class="mall_banner"></mt-swipe-item>
        <mt-swipe-item>
          <img :src="banner4" class="mall_banner"></mt-swipe-item>
        <mt-swipe-item>
          <img :src="banner5" class="mall_banner"></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="bannernav">
      <ul>
        <li>
          <i class="iconfont icon-icon_xianshi-xian"></i><br>限时购</li>
        <li>
          <i class="iconfont icon-zuanshi1"></i><br>会员</li>
        <li>
          <i class="iconfont icon-hongjiu"></i><br>企业</li>
        <li>
          <i class="iconfont icon-qiandao"></i><br>签到</li>
        <li>
          <i class="iconfont icon-fenlei"></i><br>一起拼</li>
      </ul>
    </div>
    <!-- 限时抢购 -->
    <div class="shoppingintime">
      <div class="shut">
        <h1>限时抢购</h1>
        <span>早中晚三场秒杀，限时开抢中...</span>
      </div>
      <div id="timedowm">
      </div>
    </div>
    <div class="pro">
      <dl v-for="list in malllist" :key="list.id">
        <dt> <img :src="list.img"></dt>
        <dd>{{list.title}}</dd>
        <p>￥{{list.price}}
          <span>￥{{list.oldprice}}</span>
        </p>
      </dl>
    </div>

    <!-- 一起拼团 -->
    <div class="together">
      <div class="twopeople">
        <h1>一起拼团</h1>
        <span>二人成团，爆款特惠低价购...</span>
      </div>
      <div id="lookall">
        查看全部
      </div>
    </div>
    <div class="pdt">
      <dl v-for="list in malllist" :key="list.id">
        <dt><img :src="list.img"></dt>
        <dd>{{list.title}}
          <p>{{list.title}}</p>
        </dd>
        <i class="iconfont icon-qun"></i>
        <p> 2人团
          <span>原价：¥99{{list.oldprice}}</span>
          <b>{{list.oldprice}} | 去开团</b>
        </p>
      </dl>
    </div>

    <!-- 肉禽蛋奶 -->
    <div class="food01">
      <div class="food01_nav">
        <h1>肉禽蛋奶</h1>
      </div>
      <div id="look">
        查看全部
      </div>
    </div>

    <div class="food01_img">
      <img src="" alt="">
    </div>
    <div class="concent">
      <dl>
        <i class="iconfont icon-gouwuche gouwuchee"></i>
        <dt></dt>
        <dd>山东丰谷农场散养母鸡2.5~3.2斤
          <p>鸡肉软烂，汤汁浓郁<br>
            <i class="iconfont icon-liuyan"></i>"产品不错，值得推荐"</p>
        </dd>
        <span>
          <i>99</i>元/件
        </span>
      </dl>
    </div>
  </div>
</template>

<script>
import './icon.scss'
export default {
  name: 'HomeMall',
  data () {
    return {
      name4: '选项一',
      banner1: require('@/lib/img/Mall/mall_banner01.jpg'),
      banner2: require('@/lib/img/Mall/mall_banner02.jpg'),
      banner3: require('@/lib/img/Mall/mall_banner03.jpg'),
      banner4: require('@/lib/img/Mall/mall_banner04.jpg'),
      banner5: require('@/lib/img/Mall/mall_banner05.jpg'),
      malllist: []
    }
  },
  mounted () {
    this.$axios
      .get('http://rap2api.taobao.org/app/mock/86593/api/mall')
      .then(res => {
        this.malllist = res.data.res_body
        /*  console.log(this.malllist) */
      })
  }
}
/* 倒计时 */
/* var interval = 1000
function ShowCountDown (year, month, day, divname) {
  var now = new Date()
  var endDate = new Date(year, month - 1, day)
  var leftTime = endDate.getTime() - now.getTime()
  var leftsecond = parseInt(leftTime / 1000)
  var day1 = Math.floor(leftsecond / (60 * 60 * 24));
  var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
  var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
  var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
  var cc = document.getElementById(divname)
  cc.innerHTML = /* '倒计时' + year + '年' + month + '月' + day + '日还有：' + */
/* '剩：' + day1 + '天' + hour + '小时' + minute + '分' + second + '秒'
} */
/* window.setInterval(function () { ShowCountDown(2018, 10, 1, 'timedowm') }, interval) */

</script>

<style lang="scss" scoped>
.banner_mall {
  width: 100%;
  height: 180px;
  .mall_banner {
    width: 100%;
    height: 180px;
  }
}
.bannernav {
  width: 90%;
  height: 100px;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
  ul {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      text-align: center;
      color: rgb(194, 193, 193);
      font-size: 14px;
      .iconfont {
        font-size: 30px;
        font-weight: bold;
        color: #3d4145;
      }
    }
  }
}
/* 限时抢购 */
.shoppingintime {
  width: 90%;
  height: 60px;
  margin: 0 auto;
  .shut {
    float: left;
    width: 50%;
    h1 {
      font-size: 22px;
      color: #282828;
      padding-top: 20px;
    }
  }
  #timedowm {
    float: left;
    width: 50%;
    line-height: 60px;
    text-align: center;
    font-size: 16px;
    color: red;
    font-weight: bolder;
  }
}
.pro {
  width: 90%;
  height: 280px;
  margin: 20px auto;
  display: flex;
  overflow-y: hidden;
  dl {
    width: 181px;
    height: 250px;
    margin: 3px;
    flex-direction: column;
    flex-wrap: nowrap;
    box-shadow: 0px 3px 5px #5b5b5b;
    img {
      width: 100%;
      height: 100%;
    }
    dt {
      width: 180px;
      height: 200px;
      padding: 7px;
      box-sizing: border-box;
    }
    dd {
      font-size: 16px;
      padding: 0px 7px;
    }
    p {
      font-size: 18px;
      color: red;
      padding-left: 5px;
      span {
        font-size: 12px;
        text-decoration: line-through;
        color: #666;
      }
    }
  }
}
/* 一起拼团 */
.together {
  width: 90%;
  height: 60px;
  margin: 0px auto;
  .twopeople {
    float: left;
    width: 50%;
    h1 {
      font-size: 22px;
      color: #282828;
    }
  }
  #lookall {
    float: right;
    width: 50%;
    line-height: 60px;
    text-align: right;
    font-size: 14px;
    color: #ffd300;
    font-weight: bolder;
  }
}
.pdt {
  width: 90%;
  height: 400px;
  margin: 0 auto;
  display: flex;
  overflow-y: hidden;
  dl {
    width: 300px;
    height: 300px;
    margin: 3px;
    flex-direction: column;
    flex-wrap: nowrap;
    box-shadow: 0 2px 3px #5b5b5b;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    dt {
      width: 300px;
      height: 200px;
      padding: 7px;
      box-sizing: border-box;
    }
    dd {
      font-size: 16px;
      padding: 0px 7px;
      color: #282828;
      font-weight: bold;
      p {
        padding: 0px 2px;
        color: #a7a7a7;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .iconfont {
      font-size: 22px;
      text-align: left;
      float: left;
      margin-left: 8px;
      margin-right: 5px;
    }
    p {
      font-size: 12px;
      color: #a7a7a7;
      padding-left: 10px;
      margin-top: 8px;
      span {
        font-size: 12px;
        text-decoration: line-through;
        color: #a7a7a7;
      }
      b {
        display: inline-block;
        text-align: center;
        height: 40px;
        width: 120px;
        line-height: 40px;
        font-size: 20px;
        border: 1px solid #d00218;
        color: white;
        background: #ff3c18;
        border-radius: 5px;
        position: absolute;
        right: 7px;
        bottom: 8px;
      }
    }
  }
}
/* 肉禽蛋奶 */
.food01 {
  width: 90%;
  height: 60px;
  margin: 0px auto;
  .food01_nav {
    float: left;
    width: 50%;
    h1 {
      font-size: 22px;
      color: #282828;
    }
  }
  #look {
    float: right;
    width: 50%;
    line-height: 30px;
    text-align: right;
    font-size: 14px;
    color: #ffd300;
    font-weight: bolder;
  }
}
.food01_img {
  width: 90%;
  height: 100px;
  background: rebeccapurple;
  margin: 0 auto;
}
.concent {
  width: 90%;
  height: 100px;
  border-bottom: 1px solid #a0a0a0;
  margin: 0 auto;
  dl {
    position: relative;
    .gouwuchee {
      position: absolute;
      right: 5px;
      top: 25%;
      font-size: 35px;
      color: black;
    }
    dt {
      width: 100px;
      height: 98px;
      background: palevioletred;
      float: left;
      margin-right: 5px;
    }
    dd {
      color: #191919;
      font-size: 16px;
      margin-bottom: 10px;
      p {
        font-size: 13px;
        color: #a0a0a0;
        line-height: 15px;
      }
    }
    span {
      color: #ff432b;

      i {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
