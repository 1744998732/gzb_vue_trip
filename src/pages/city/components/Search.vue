<template>
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
  .header-tab
    background-color $bgColor
    height .80rem
    line-height .80rem
    display flex
    flex-direction row
    justify-content center
    align-items center
    .item
      color #fff
      border 1px solid #fff
      line-height .4rem
      height .4rem
      width 36%
      text-align center
      &.active
        background-color #fff
        color $bgColor
</style>
