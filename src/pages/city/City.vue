<template>
<div>
    <city-header></city-header>
    <city-selection></city-selection>
    <keep-alive>
    <router-view/>
        </keep-alive>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySelection from './components/Selection'
export default {
  name: 'Home',
  components: {
    CityHeader,
    CitySelection
  }
}
</script>

<style lang="stylus">
  .header-tab
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
