<template>
    <div class="hotcity">
      <div class="title">热门城市</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom"
         v-for="item of hotCities" :key="item.id"
         @click="handleCityChange(item.name)">
            {{item.name}}
        </li>
    </ul>
        </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'HotCities',
  props: {
    hotCities: Array
  },
  methods: {
    handleCityChange (name) {
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-rightbottom
    &:before
      border-color #bbb
    &:after
      border-color: #bbb
  .title
    line-height .75rem
    background #eee
    padding-left .3rem
    color #212121
    font-size .2rem
  .item-wrapper
    display flex
    flex-wrap wrap
    justify-content space-between
    .item
      width calc(100% / 3)
      height 0.9rem
      line-height 0.9rem
      text-align center
  &.cityselect
    .item-wrapper
      padding .3rem 0
      justify-content flex-start
      background-color #fff
      .item
        margin 0
        width calc(100% / 6)
  .citylist
    .item-wrapper
      justify-content flex-start
      .item
        width 25%
</style>
