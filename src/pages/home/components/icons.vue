<template>
<div class="icons">
<swiper :options="swiperOption">
<swiper-slide v-for="(page, index) of pages" :key="index">
<div class="icon"
v-for="item of page"
:key="item.id"
>
<div class="icon-img">
<img class="icon-img-content" :src="item.imgUrl">
</div>
<p class="icon-desc">{{item.desc}}</p>
</div>
</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
    <div class="location-wrapper border-top">
      <div class="location border-right"><span class="iconfont">&#xe610;</span>定位失败</div>
      <div class="location"><span class="iconfont">&#xe76c;</span>玩水季</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'home-icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 22%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .28rem
        box-sizing: border-box
        padding: .15rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
  .location-wrapper
    display flex
    height 1rem
    line-height 1rem
    .location
      text-align center
      flex 1
</style>
