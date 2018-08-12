<template>
  <div class="list">
    <div class="hotcity">
      <div class="title">热门城市</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom">北京</li>
        <li class="item border-rightbottom">上海</li>
        <li class="item border-rightbottom">三亚</li>
        <li class="item border-rightbottom">香港</li>
        <li class="item border-rightbottom">杭州</li>
        <li class="item border-rightbottom">广州</li>
    </ul>
        </div>
    <div class="cityselect">
      <div class="title">字母排序</div>
    <ul class="item-wrapper">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
        <li class="item">F</li>
    </ul>
    </div>
    <div class="citylist">
      <div class="title">A</div>
    <ul class="item-wrapper">
        <li class="item border-rightbottom">阿里</li>
        <li class="item border-rightbottom">阿勒泰</li>
        <li class="item border-rightbottom">阿桂</li>
        <li class="item border-rightbottom">阿林</li>
                <li class="item border-rightbottom">阿桂</li>
        <li class="item border-rightbottom">阿林</li>
                <li class="item border-rightbottom">阿桂</li>
        <li class="item border-rightbottom">阿林</li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForeignCities'
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
      .item
        width 25%
</style>
