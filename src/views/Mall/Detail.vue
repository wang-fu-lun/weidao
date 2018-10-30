<template>
  <!-- <div>
    <router-link to='/mall'>
      <h2>返回到商城</h2>
    </router-link>
    <h1>详情页面</h1>
    <dl v-for="(item,key) in getDetail" :key='key'>
      <dt>
        <img :src="item.imgs">
      </dt>
      <dd>
        <p>{{item.desc}}</p>
        <span>{{item.price}}</span>
        {{item.id}}
      </dd>
    </dl>
  </div> -->
  <div id="detail">
    <div class="detail_header">
      <router-link to="/mall">
        <i class="iconfont icon-fanhui1"></i>
      </router-link>
      <i class="iconfont icon-fenxiang "></i>
      <i class="iconfont icon-aixin "></i>
    </div>
    <div class="detail_body" v-for="(item,key) in getDetail" :key='key'>
      <div class="lunbo">
        <mt-swipe :auto="0">
          <mt-swipe-item> <img :src="item.imgs" class="detailbanner_img"></mt-swipe-item>
            <mt-swipe-item> <img :src="item.imgs" class="detailbanner_img"></mt-swipe-item>
              <mt-swipe-item> <img :src="item.imgs" class="detailbanner_img"></mt-swipe-item>
                <mt-swipe-item> <img :src="item.imgs" class="detailbanner_img"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="ckt">
        <div>
          <h1>【商品:{{item.id}}】{{item.title}}</h1>
          <p>{{item.desc}}</p>
        </div>
        <i class="iconfont icon-2zaixiankefubai "></i>
      </div>
      <div class="txt">
        【每天下午3点截单，11点前订单当天发出，之后订单第二天发出】谷道优粮燕麦面包粉含有丰富的膳食纤维，可促动肠胃蠕动，带有全谷物类的少量脂肪，口感细腻，香味浓郁，是健身减脂人士的佳选！
        <p>¥
          <i>{{item.price}}</i>
          <span>原价:¥29.9</span>
          <b>不支持7天无理由退款</b>
        </p>
      </div>
      <img :src="photo01" class="photo0">
      <img :src="photo02" class="photo0">
      <img :src="photo03" class="photo0">
      <img :src="photo04" class="photo0">
    </div>
      <div class="detail_footer">
        <div class="footer_left">
          <p>
            <i class="iconfont icon-xiangshang "></i>
            <span>规格</span>
            <i>已选:1000g</i>
            <router-link to='/cart'>
              <i class="iconfont icon-gouwuche-copy "></i>
            </router-link>
          </p>
        </div>
        <div class="footer_right"
        v-for="item in getDetail" :key='item.id'
        @click='Detail_addTocart(item)'>
          加入购物车
        </div>

      </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { prodcuts } from '@/services.js'
import './icon.scss'
export default {
  name: 'detail',
  data () {
    return {
      id_: '',
      oldlist: [],
      d1: require('@/lib/img/detail/01.jpg'),
      d2: require('@/lib/img/detail/02.jpg'),
      d3: require('@/lib/img/detail/03.jpg'),
      d4: require('@/lib/img/detail/04.jpg'),
      d5: require('@/lib/img/detail/05.jpg'),
      photo01: require('@/lib/img/detail/001.png'),
      photo02: require('@/lib/img/detail/002.png'),
      photo03: require('@/lib/img/detail/003.jpg'),
      photo04: require('@/lib/img/detail/004.jpg')
    }
  },
  methods: {
    ...mapMutations(['toggleTabbar']),
    getprods () {
      prodcuts(1).then(resp => {
        this.oldlist = (resp.data.res_body.data)
      })
    },
    Detail_addTocart (currProduct) {
      this.$store.dispatch('addCart', currProduct)
    }
  },
  computed: {
    ...mapState(['cart']),
    getDetail () {
      const lis = this.oldlist.filter(item => (item.id == this.id_))
      return lis
    }
  },

  mounted () {
    this.getprods()
    /*    this.id_ = this.$route.params.id
      console.log(this.id_) */
  },
  activated () {
    this.toggleTabbar(false)
    this.getprods()
    this.id_ = this.$route.params.id
  },
  deactivated () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang="scss" scoped>
/*  */
#detail {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.detail_header {
  width: 90%;
  margin: 0 auto;
  height: 100px;
  border-bottom: 1px solid #ccc;
}

.detail_body {
  width: 100%;
  flex: 1;
  overflow-x: hidden;
  font-size: 10px;
  .photo0 {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .txt {
    width: 90%;
    margin: 0 auto;
    height: 120px;
    margin-top: 10px;
    color: #a7a7a7;

    p {
      color: #ff432b;
      i {
        font-size: 1.6rem;
        font-style: normal;
      }
      span {
        color: #a7a7a7;
        text-decoration: line-through;
      }
      b {
        color: #ffd300;
        font-weight: 100;
        font-size: 12px;
        margin-left: 28%;
      }
    }
  }
  .lunbo {
    height: 350px;
    .detailbanner_img {
      width: 100%;
      height: 100%;
    }
  }
  .ckt {
    width: 90%;
    margin: 0 auto;
    height: 110px;
    div {
      float: left;
      width: 80%;
      height: 100px;
      border-right: 1px solid #a7a7a7;
      h1 {
        font-size: 22px;
        color: #191919;
      }
      p {
        line-height: 60px;
        color: #a7a7a7;
      }
    }

    .icon-2zaixiankefubai {
      font-size: 40px;
      float: right;
      color: #191919;
      line-height: 100px;
    }
  }
}

.detail_footer {
  width: 100%;
  height: 50px;
  .footer_left {
    width: 65%;
    float: left;
    line-height: 50px;
    .icon-xiangshang {
      float: left;
      color: black;
      margin-left: 5%;
    }
    .icon-gouwuche-copy {
      float: right;
      font-size: 28px;
      color: black;
    }
    span {
      color: black;
      margin-left: 5%;
    }
    i {
      font-style: normal;
      margin-left: 5%;
      color: #a7a7a7;
    }
  }
  .footer_right {
    width: 30%;
    height: 50px;
    float: right;
    line-height: 50px;
    text-align: center;
    color: #ffd300;
    background: black;
  }
}
/*  */
#detail {
  .detail_header {
    width: 90%;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    .icon-fanhui1 {
      float: left;
      color: black;
      font-size: 20px;
    }
    .icon-aixin {
      float: right;
      margin-right: 20px;
      color: black;
      font-size: 25px;
    }
    .icon-fenxiang {
      float: right;
      margin-right: 10px;
      color: black;
      font-size: 25px;
    }
  }
}
</style>
