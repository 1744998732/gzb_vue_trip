<template>
  <div class="search">
  <div class="header-tab">
    <router-link to="/city/domestic">
     境内
   </router-link>
   <router-link to="/city/foreign">
     境外·港澳台
   </router-link>
  </div>
</div>
</template>
<script>
export default {
  name: 'CitySearch'
}

</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl"
  .search
    width 100%
    background-color $bgColor
  .header-tab
    margin 0 1rem
    height .8rem
    line-height .8rem
    display flex
    justify-content center
    align-items center
  .header-tab a
      display block
      width 50%
      color #fff
      border 1px solid #fff
      line-height .4rem
      height .4rem
      text-align center
      border-radius .02rem
    .router-link-active
      background-color #fff
      color $bgColor !important
</style>
