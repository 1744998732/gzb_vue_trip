<template>
  <div class="list">
    <div class="hotcity">
      <div class="title">热门城市</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom"
         v-for="item of hotCities" :key="item.id">{{item.name}}</li>
    </ul>
        </div>

    <div class="cityselect">
      <div class="title">字母排序</div>
    <ul class="item-wrapper" >
        <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
    </div>

    <div class="citylist" v-for="(item, key) of cities" :key="key">
      <div class="title">{{key}}</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom" v-for="innerItem of item"
        :key="innerItem.id">{{innerItem.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ForeignCities',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/foreigncity.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    this.getHomeInfo()
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
