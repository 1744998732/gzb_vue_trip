<template>
  <div class="header">
    <router-link to='/'>
    <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow: hidden
    height: .66rem
    line-height: .86rem
    background: $bgColor
    text-align center
    color: #fff
    font-size .32rem
    .back-icon
      position absolute
      width .64rem
      text-align: center
      font-size: .35rem
      font-weight bold
      color #fff
</style>
