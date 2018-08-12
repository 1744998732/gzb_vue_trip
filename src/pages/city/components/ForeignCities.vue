<template>
  <div class="list">
    <div class="area">
      <div class="title">热门城市</div>
    </div>
    <ul>
        <li class="border-rightbottom">北京</li>
        <li class="border-rightbottom">上海</li>
        <li class="border-rightbottom">三亚</li>
        <li class="border-rightbottom">香港</li>
        <li class="border-rightbottom">杭州</li>
        <li class="border-rightbottom">广州</li>
    </ul>
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
  .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
          float left
          width 33.33%
          .button
              margin .1rem
              padding .1rem 0
              text-align center
              border: .02rem solid #ccc
              border-radius .06rem
  li
      float left
      width 33.33%
      height 0.9rem
      line-height 0.9rem
      text-align center
</style>
