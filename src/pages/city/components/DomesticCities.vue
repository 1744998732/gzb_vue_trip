<template>
  <div class="list">
    <div class="area">
      <div class="title">热门城市</div>
    <ul>
        <li class="border-rightbottom">香港</li>
        <li class="border-rightbottom">澳门</li>
        <li class="border-rightbottom">台湾</li>
        <li class="border-rightbottom">曼谷</li>
        <li class="border-rightbottom">东京</li>
        <li class="border-rightbottom">巴厘岛</li>
    </ul>
</div>
  </div>
</template>

<script>
export default {
  name: 'DomesticCities'
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
  li
      float left
      width 33.33%
      height 0.9rem
      line-height 0.9rem
      text-align center
</style>
