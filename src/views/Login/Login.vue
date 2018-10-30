<template>
  <div class="Mine">
    <wdHeader>
      <div class="mine_back">
        <router-link to='/'>
          <i class="iconfont icon-back-fanhui"></i>
        </router-link>
        <div class="title">
          登录
        </div>
        <span>找回密码</span>
      </div>
    </wdHeader>
    <div class='Mine_main' v-show="showLogin">
      <input type="text" placeholder="用户名" name='username' v-model="username">
      <input name='password' type='text' placeholder="密码" v-model="password">
      <input type="submit" v-on:click="login" value="登录">
      <div class="mine_or">
        <span class='or_line'></span>
        <span class="or_">或</span>
        <span class='or_line'></span>
      </div>
      <div class="login_more">
        <router-link to='./register'>
          <div>用户注册</div>
        </router-link>
        <div>QQ登录</div>
        <div>微博登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import wdHeader from '@/components/wdHeader'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      showLogin: true,
      showTishi: false,
      tishi: '',
      username: '',
      password: ''
    }
  },
  components: {
    wdHeader

  },
  mounted () {
  },
  methods: {
    ...mapMutations(['toggleTabbar']),
    login () {
      if (this.username !== '' && this.password !== '') {
        window.localStorage.username = this.username
        window.localStorage.password = this.password
        Toast({
          message: '登录成功',
          iconClass: 'icon icon-success',
          duration: 1000
        })
        this.$router.history.push('/home')
        window.location.reload()
      } else {
        MessageBox('登录错误', '随便输入个账号密码')
      }
    }
  },
  activated () {
    this.toggleTabbar(false)
  },
  deactivated () {
    this.toggleTabbar(true)
  }
}
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}
.Mine {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.mine_back {
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  height: 45px;
  background: #1b1b1b;
  display: flex;
  justify-content: space-between;
  color: #dedede;
  align-items: center;
  padding: 0px 10px;
  .icon-back-fanhui {
    color: #dedede;
  }
  .title {
    font-size: 18px;
    padding-left: 35px;
  }
  span {
    font-size: 14px;
  }
}
.Mine_main {
  background: #f0f0f0;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  input[type="text"] {
    width: 350px;
    box-sizing: border-box;
    height: 40px;
    margin: 5px 0px;
    border: none;
    padding-left: 25px;
    outline: none;
  }
  input[type="submit"] {
    width: 330px;
    background: #1b1b1b;
    margin: 7px auto;
    color: #f0f0f0;
    height: 38px;
    border-radius: 5px;
  }
  .mine_or {
    $col: rgba(0, 0, 0, 0.1);
    margin: 10px 0px;
    width: 330px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(0, 0, 0, 0.3);
    .or_line {
      display: inline-block;
      width: 140px;
      border-bottom: 1px solid $col;
    }
  }
  .login_more {
    width: 330px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    div {
      width: 100px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      color: #535353;
      font-size: 14px;
      border-radius: 5px;
      background: #fff;
    }
  }
}
</style>
