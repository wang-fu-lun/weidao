<template>
  <div id="app">
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="tab_bar">
      <tabbar v-show="isShowTabbar"></tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    tabbar
  },
  computed: {
    ...mapState(['isShowTabbar'])
  }
}
</script>

<style lang='scss'>
.mint-tab-container-wrap {
  width: 100%;
  flex: 1;
  height: 100%;
  background: #f0f0f0;
}
html,
body {
  height: 100%;
  overflow-x: hidden;
  display: flex;
  /*   padding-bottom: 64px; */
  flex-direction: column;
}

#app {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    flex: 1;
  }
  .main {
    flex: 11;
    overflow: hidden;
  }
  .tab_bar {
    padding: 3px 0px;
    background: #f7f7f8;
  }
}
</style>
