<template>

  <Tabs value="name1" class='wdTabs'>
    <TabPane label="共享购物" name="name1">
      <!-- 轮播图 -->
      <div class="Home_swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img :src="imgUrl"></mt-swipe-item>
            <mt-swipe-item><img :src="iMgUrl"></mt-swipe-item>
              <mt-swipe-item><img :src="imGUrl"></mt-swipe-item>
                <mt-swipe-item><img :src="imgURl"></mt-swipe-item>
                  <mt-swipe-item><img :src="imgUrL"></mt-swipe-item>
        </mt-swipe>
        <div class="home_cell">预购贵宾专线</div>
      </div>
      <div class="home_share">
        <h1>农场特色</h1>
        <div class="share_text">
          定制共享农场服务平台，为用户与良心农场牵桥搭线，盘活乡村闲置农场，助力都市人民零距离亲近田园，让食材安全放心，让品质生活成为习惯。
        </div>
        <div class="farm_icon">
          <img :src="g" class="farm_img">
          <img :src="h" class="farm_img">
          <img :src="d" class="farm_img">
        </div>
          <div class="farm_share">
            <img :src="img01" class="img_farm">
            <img :src="img02" class="img_farm">
            <img :src="img03" class="img_farm">
            <img :src="img04" class="img_farm">
            <img :src="img05" class="img_farm">
            <img :src="ft" class="foo">
        </div>
          </div>

    </TabPane>
    <TabPane label="以物易物" name="name2">
      <div class="tab1">
        <br>
        <h1>Tab22标签二的内容</h1>
        <br>
        <h1>Tab22标签二的内容</h1>
        <br>
        <h1>Tab22标签二的内容</h1>
        <br>
        <h1>Tab22标签二的内容</h1>
        <br>
        <h1>Tab22标签二的内容</h1>
        <br>
        <h1>Tab22标签二的内容</h1>

      </div>
    </TabPane>
    <TabPane label="全景农场" name="name3">标签三的内容</TabPane>
    <TabPane label="味道商城" name="name4">
      <HomeMall></HomeMall>
    </TabPane>
  </Tabs>

</template>
、
<script>
import HomeMall from '@/views/Home/HomeMall.vue'
export default {
  name: 'tabs',
  data () {
    return {
      name1: '选项一',
      imgUrl: require('../lib/img/home/banner1.png'),
      iMgUrl: require('../lib/img/home/banner2.jpg'),
      imGUrl: require('../lib/img/home/banner3.jpg'),
      imgURl: require('../lib/img/home/banner4.jpg'),
      imgUrL: require('../lib/img/home/banner5.jpg'),
      g: require('../lib/img/home/01.png'),
      h: require('../lib/img/home/03.png'),
      d: require('../lib/img/home/02.png'),
      img01: require('../lib/img/home/farmShare1.png'),
      img02: require('../lib/img/home/farmShare2.png'),
      img03: require('../lib/img/home/farmShare3.png'),
      img04: require('../lib/img/home/farmShare4.png'),
      img05: require('../lib/img/home/farmShare5.jpg'),
      ft: require('../lib/img/home/footer.png')
    }
  },
  components: {
    HomeMall
  }
}
</script>

<style lang='scss'>
.ivu-tabs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ivu-tabs-tabpane {
  overflow-x: hidden;
}
.ivu-tabs-nav-scroll {
  padding-left: 10px;
}
.ivu-tabs-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  /*  padding:0px 18% 0px 5%; */
  padding-right: 10%;
}
.ivu-tabs-ink-bar {
  background-color: #ffd300;
}
.ivu-tabs-bar {
  border: none;
  margin-bottom: 0px;
  text-align: center;
}
.ivu-tabs-tab {
  padding: 10px 5px !important;
  width: 100%;
}
.ivu-tabs-tab-active {
  color: black !important;
}
.lunbo {
  width: 100%;
  height: 400px;
  background: red;
}

.Home_swipe {
  width: 100%;
  height: 400px;
  margin-top: 2px;
  position: relative;
  .mint-swipe-indicator {
    border: 1px solid white;
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .home_cell {
    position: absolute;
    top: 300px;
    left: 33%;
    width: 130px;
    height: 35px;
    background: #ffd300;
    border: 1px solid #f6b60c;
    text-align: center;
    line-height: 35px;
    border-radius: 20px;
  }
}
.home_share {
  width: 100%;
  height: 250px;
  h1 {
    margin-top: 20px;
    font-size: 34px;
    text-align: center;
    font-family: serif;
    color: #3e3a39;
  }
  .share_text {
    width: 100%;
    padding: 5px 5%;
    letter-spacing: 5px;
    color: #3e3a39;
    font-weight: 400;
  }
  .farm_img {
    padding: 30px 8%;
  }
  .img_farm {
    width: 100%;
    height: 180px;
  }
  .foo {
    width: 100%;
  }
}
</style>
