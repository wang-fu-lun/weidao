
<template>
  <div class="tabbar">
    <router-link :to="item.path" v-for="item in tabsRoutes" :key="item.path">
      <mt-badge type="error" v-if="item.name === 'Cart'" size='small'>{{cartCount}}</mt-badge>
      <i :class="`iconfont ${item.icon} ${currentPath === item.path ? 'iconactive' : ''}`"></i>
      <span :class="`${currentPath === item.path ? 'iconactive' : ''}`">{{item.title}}</span>
    </router-link>
    <!--  <router-link to='/mall'>
    <i class="iconfont icon-leimupinleifenleileibie"></i>
        <span>分类</span>

    </router-link>
    <router-link to='/cart'>
     <i class="iconfont icon-gouwucheman"></i>
        <span>购物车</span>

    </router-link>
    <router-link to='/mine'>
    <i class="iconfont icon-wode"></i>
        <span>我的</span>-->

  </div>
</template>

<script>
import routes from '@/router/router'
import { mapGetters } from 'vuex'
const tabsRoutes = routes.filter(route => route.title)
export default {
  name: 'tabbar',
  data () {
    return {
      tabsRoutes
    }
  },
  computed: {
    ...mapGetters(['cartCount']),
    // 当前路由
    currentPath () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang='scss' scoped>
$write: #929292;
.tabbar {
  position: relative;
  width: 100%;
  height: 54px;
  align-items: center;
  display: flex;
  background: #f7f7f8;
  border-top: #deeded;

  > a {
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: $write;
    font-size: 16px;
    span {
      color: $write;
    }
    .iconfont {
      font-size: 24px !important;
    }
  }
}
.iconactive {
  color: #ffd300 !important;
}
.mint-badge {
  position: absolute;
  top: -20%;
  color: #ffffff !important;
  right: 30%;
  border-radius: 50% !important;
}
</style>
