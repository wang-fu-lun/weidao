
<template>
  <div class="home">
    <wdHeader>
      <div class="home_serach">
        <router-link to="/serach">
          <div class="serach_">
            <i class="iconfont icon-search"></i>
          </div>
        </router-link>
        <i class="iconfont icon-lingdang"></i>
      </div>
    </wdHeader>

    <div class="home_main">
      <span class='iconmenu'>
        <i class="iconfont icon-weibiaoti15"></i>
      </span>
      <Tabs></Tabs>
    </div>

  </div>

</template>

<script>
import wdHeader from '@/components/wdHeader'
/* import Navbar from '@/components/Navbar' */
import Tabs from '@/components/Tabs'

export default {
  name: 'Home',
  data () {
    return {
      msg: '我是首页我是首页我是首页'
    }
  },
  components: {
    wdHeader,
    Tabs
  }
}
</script>

<style lang='scss' scoped>
//添加scoped CSS只限组件中使用
body,
html {
  overflow: hidden;
}
.main {
  a {
    text-decoration: none;
  }
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home_main {
    flex: 1;
    overflow-x: hidden;
    position: relative;
    .iconmenu {
      position: absolute;
      right: 5%;
      top: 7px;
      .icon-weibiaoti15 {
        font-size: 18px;
        color: black;
      }
    }
  }
  .home_serach {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ddd;
    top: 0;
    display: flex;
    justify-content: space-around;
    padding: 8px 12px 0px 5px;
    .serach_ {
      width: 300px;
      height: 30px;
      border: 1px solid #ddd;
      background: #eee;
      line-height: 30px;
      padding-left: 20px;
      ::after {
        content: "我们为您优选";
        font-size: 14px;
        margin-left: 15px;
        margin-bottom: 5px;
      }
      .icon-search {
        font-size: 20px;
        color: #666;
      }
    }
    .icon-lingdang {
      font-size: 25px;
      margin-right: -5px;
      margin-top: -3px;
    }
  }
}
</style>
