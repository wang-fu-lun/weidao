<template>
  <div class='mall'>
    <wdHeader>
      <h1 class="mall_title">{{msg}}</h1>
      <router-link to="/serach">
        <div class="serach_mall">
          <i class="iconfont icon-search mall_icon"></i>
        </div>
      </router-link>
    </wdHeader>

    <div class="mall_main">
      <Navbar></Navbar>
    </div>
  </div>

</template>

<script>
import wdHeader from '@/components/wdHeader'
import Navbar from './Navbar.vue'
export default {
  name: 'Mall',
  data () {
    return {
      msg: '基础分类'
    }
  },
  components: {
    wdHeader,
    Navbar
  }
}
</script>

<style lang='scss' scoped>
body,
html {
  overflow: hidden;
}
.main {
  overflow: hidden;
  a {
    text-decoration: none;
  }
}
.mall {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  .mall_title {
    width: 100%;
    height: 50px;
    background: white;
    font-size: 24px;
    padding: 15px 0px 0px 20px;
  }
  .serach_mall {
    position: absolute;
    top: 18px;
    right: 15px;
    .mall_icon {
      font-size: 24px;
    }
  }
  .mall_main {
    flex: 1;
    overflow: hidden;
  }
}
wdHeader {
  height: 65px !important;
}
</style>
