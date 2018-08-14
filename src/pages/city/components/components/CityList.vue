<template>
<div class="list">
    <div>
    <div class="citylist"
         v-for="(item, key) of cities"
         :key="key"
         :ref="'alpha-' + key">
      <div class="title">{{key}}</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom" v-for="innerItem of item"
        :key="innerItem.id">{{innerItem.name}}</li>
      </ul>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'CityList',
  props: {
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const index = this.letter
        const element = this.$refs['alpha-' + index][0]
        const top = element.offsetTop
        document.body.scrollTop = top
      }
    }
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
    justify-content flex-start
    .item
      width 25%
      height 0.9rem
      line-height 0.9rem
      text-align center
</style>
