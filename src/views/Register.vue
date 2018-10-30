<template>
  <div id="reg">
    <H1>{{msg}}</H1>

  </div>

</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: '用户注册'
    }
  },
  component: {
    template: '#reg'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
</style>
