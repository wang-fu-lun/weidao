<template>
  <div class="cart_box">
    <div class="cart_title">
      <h2>购物车</h2>
      <span>编辑</span>
    </div>
    <div class="cart_main">
      <div class="main_title">
        <i class="iconfont icon-xuanze"></i>
        <p>味道网发货</p>
      </div>
      <div class="carts">
        <div class="cart_prods" v-for='prod in cart' :key='prod.id'>
          <i :class="`iconfont icon-${all.isShop ? 'xuanze' : 'kong'}`" @click.stop='Shopselect(prod.id)'></i>
          <!-- <span key = 'prod.id'><i class="iconfont icon-kong" v-if='kong' @click.stop='changexz'></i>
            <i class="iconfont icon-xuanze" v-if='xuanze' @click.stop='changexz'></i></span> -->
          <div class="prod_right">
            <img :src="prod.imgs">
            <div class="desc_right">
              <p class="cart_title_">【商品{{prod.id}}】{{prod.title}}</p>
              <div class="desc">
                <span>{{prod.price}}元</span>
                <button class="wbtn btn1" @click='decrement(prod)'>-</button>
                <input type="text" :value="prod.amount">
                <button class="wbtn btn2" @click.stop='increment(prod)'>+</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="cart_foot">
      <div class="foot_left">
        <div class="quanxuan">
          <span><i :class="`iconfont icon-${all.isShop ? 'xuanze' : 'kong'}`" @click.stop='allshop'></i>
          </span>
          <span class="qactive">全选</span>
        </div>
        <div class='sum'>合计：<span class="summoney">{{all.isShop?totalMoney:0}}</span>元</div>
      </div>
      <span class='jiesuan'>去结算</span>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      imgurl: require('../../static/img/prod1.jpg'),
      isShop: true,
      all: {
        isShop: false
      }
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalMoney'])
  },
  methods: {
    increment (currentProduct) {
      this.$store.dispatch('increment', currentProduct)
    },
    decrement (currentProduct) {
      this.$store.dispatch('decrement', currentProduct)
    },
    Shopselect (id) {
      console.log('单选')
      this.isShop = !this.isShop
    },
    allshop () { // 全选
      this.all.isShop = !this.all.isShop
    }
  }
}
</script>

<style lang='scss' scoped>
//添加scoped CSS只限组件中使用
.cart_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .cart_title {
    width: 100%;
    height: 45px;
    background: #1b1b1b;
    padding: 0px 10px;
    h2 {
      width: 60px;
      text-align: left;
      height: 45px;
      line-height: 45px;
      color: white;
      margin-left: 45%;
      float: left;
    }
    span {
      height: 45px;
      line-height: 45px;
      font-size: 18px;
      color: white;
      float: right;
    }
  }
  .cart_main {
    flex: 1;
    background: #f0f0f0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main_title {
      padding-left: 5%;
      width: 100%;
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #f0f0f0;
      background: white;
      p {
        font-size: 16px;
        margin-left: 20px;
      }
    }
    .carts {
      flex: 1;
      height: 100%;
      overflow-x: hidden;
    }
    .cart_prods {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding-left: 5%;
      img {
        width: 30%;
        height: 100%;
        margin-right: 1%;
      }
      .prod_right {
        display: flex;
        align-items: center;
        width: 90%;
        height: 100%;
        border-bottom: 1px solid #dedede;
        .desc_right {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .cart_title_ {
            height: 30px;
            width: 90%;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
          }
          p {
            width: 100%;
            height: 20px;
            line-height: 20px;
            margin-top: 10px;
            font-size: 14px;
            padding-left: 5%;
          }
          .desc {
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding-left: 5%;
            span {
              color: red;
              font-size: 18px;
              margin-right: 40px;
            }
            input {
              width: 40px;
              height: 30px;
              border: 1px solid #ccc;
              margin: 0px 3px;
              text-align: center;
            }
            button {
              width: 30px;
              height: 30px;
              border-radius: 50px;
              font-size: 20px;
              background: white;
              display: flex;
              justify-content: center;
              align-items: center;
              outline: none;
            }
          }
        }
      }
    }
  }
  .cart_foot {
    height: 50px;
    border-bottom: 1px solid #dedede;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .foot_left {
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: space-between;
      padding: 0px 15px;
      .quanxuan {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        display: flex;
        align-items: center;
        width: 75px;
        justify-content: space-between;
      }
      .sum {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
      }
    }
    .jiesuan {
      background: #ff3939;
      display: block;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      color: white;
      width: 120px !important;
      font-weight: 900;
    }
    .jiered {
      color: red;
    }
  }
  .iconfont {
    font-size: 24px !important;
    margin-right: 15px;
  }
  .icon-xuanze {
    color: #0ab404 !important;
  }
  .summoney {
    color: red;
  }
}
</style>
