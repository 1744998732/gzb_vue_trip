<template>
  <div class="search">
  <div class="header-tab">
    <div :class="['item', tab === 1 ? 'active' : '']"
     @click="tab = 1">
     <router-link to="/city/domestic">境内</router-link>
   </div>
    <div :class="['item', tab === 2 ? 'active' : '']"
     @click="tab = 2">
     <router-link to="/city/foreign">境外·港澳台</router-link>
   </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      tab: 1
    }
  }
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
    .item
      width 50%
      color #fff
      border 1px solid #fff
      line-height .4rem
      height .4rem
      margin-left value
      text-align center
      border-radius .02rem
      &.active
        background-color #fff
        color $bgColor
</style>
