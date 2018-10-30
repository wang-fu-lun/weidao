<template>
    <div class="wdheader">
        <!-- <div class="header_left">
            <slot></slot>
        </div>
        <div class="header_right">
            <slot></slot>
        </div> -->
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'wdHeader',
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
</style>
