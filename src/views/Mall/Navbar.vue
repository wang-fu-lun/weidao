<template>
  <div class="navbar">
    <mt-navbar v-model="selected" class='malltab'>
      <mt-tab-item id="rou">肉禽蛋奶</mt-tab-item>
      <mt-tab-item id="mi">米面粮油</mt-tab-item>
      <mt-tab-item id="haixian">海鲜水产</mt-tab-item>
      <mt-tab-item id="shuiguo">水果蔬菜</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected" value='rou'>
      <mt-tab-container-item id="rou" class='con'>
        <div class="bg_container">
          <a href="#">
            <img :src='imgurltitle1' class='imgtitle'>
          </a>
            <div class="prods" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="1"
            infinite-scroll-immediate-check=false>
              <dl class='prod' v-for="item in list" :key='item.uid'>
                <router-link :to="`/detail/${item.id}`">
                  <dt><img :src="item.imgs"></dt>
                </router-link>
                <dd>
                  <h3>{{item.title}}</h3>
                  <span class="desc">{{item.desc}}</span>
                  <div class="prod_bottom">
                    <div>
                      <span class='price'>{{item.price}}</span>
                      <span class="pie">元/件</span>
                    </div>
                    <span @click.stop="addToCart(item)">
                      <i class="iconfont icon-gouwuche"></i>
                    </span>
                  </div>
                </dd>
              </dl>
            </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="mi">
        <div class="bg_container">
          <a href="#">
            <img :src='imgurltitle2' class='imgtitle'>
          </a>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="haixian">
        <div class="bg_container">
          <a href="#">
            <img :src='imgurltitle3' class='imgtitle'>
          </a>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="shuiguo">
        <div class="bg_container">
          <a href="#">
            <img :src='imgurltitle4' class='imgtitle'>
          </a>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui'
import { prodcuts } from '@/services.js'
/* import {actions} from '@/store' */
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  components: {
    Navbar,
    TabItem
  },
  data () {
    return {
      selected: 'rou',
      imgurltitle1: require('../../../static/img/fenlei1.png'),
      imgurltitle2: require('../../../static/img/fenlei2.png'),
      imgurltitle3: require('../../../static/img/fenlei3.png'),
      imgurltitle4: require('../../../static/img/fenlei4.png'),
      list: [],
      loading: false
    }
  },
  mounted () {
    this.getprods()
  },
  methods: {
    getprods () {
      prodcuts(1).then(resp => {
        /*  console.log(resp.data.res_body.data) */
        this.list = (resp.data.res_body.data)
        this.loading = false
      })
    },
    addToCart (currProduct) {
      this.$store.dispatch('addCart', currProduct)
    },
    loadMore () {
      this.loading = true
      prodcuts(1).then(resp => {
        this.list = this.list.concat(resp.data.res_body.data)
      })
      this.loading = false
    }
  },
  computed: {
    ...mapState(['cart'])
  }

}
</script>

<style lang='scss' scoped>
.navbar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding: 5px 0px;
  .mint-tab-container {
    flex: 1;
    width: 100%;
    display: flex;
    height: 100%;
    .mint-tab-container-item {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      background: #f0f0f0;
    }
  }
  .mint-tab-item {
    color: #dedede;
    font-size: 16px;
  }
  .is-selected {
    color: black;
    font-weight: 400;
    border-bottom: 2px solid #ffd300;
    margin: 0px 5px;
    box-sizing: border-box;
    font-size: 16px !important;
  }
}
.bg_container {
  background: #f0f0f0;
  width: 92%;
  margin: 8px auto;
  border-radius: 4px;
  .imgtitle {
    width: 100%;
    height: 10%;
    margin-bottom: 5px;
  }
  .prods {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .prod {
      width: 47%;
      height: 245px;
      background: #fff;
      margin: 7px 3px;
      dt {
        height: 66%;
        width: 100%;
        img {
          height: 100%;
          width: 100%;
        }
      }
      dd {
        height: 30%;
        padding-left: 5px;
      }
      h3 {
        color: black;
        width: 100%;
        font-weight: 400;
        font-size: 16px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
        margin: 3px 0px;
      }
      .desc {
        display: block;
        width: 100%;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      .prod_bottom {
        width: 100%;
        display: flex;
        align-items: center;
        height: 30px;
        justify-content: space-between;
        padding: 0px 13px;
        .pie {
          color: red;
        }
        .icon-gouwuche {
          font-size: 24px !important;
          color: black;
        }
      }
    }
  }
}
</style>
