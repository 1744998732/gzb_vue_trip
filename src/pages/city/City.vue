<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <keep-alive>
    <router-view/>
        </keep-alive>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'Home',
  components: {
    CityHeader,
    CitySearch
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
