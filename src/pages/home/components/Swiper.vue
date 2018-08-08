<template>
<div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg" />
      </swiper-slide>
       <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1806/8f/d09fa241a01ac02.jpg_750x200_e0c86013.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/40/1d7be74ed1584002.jpg_750x200_c41233c9.jpg" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important
.wrapper
  overflow: hidden
  width: 375xp
  height: 100xp
  .swiper-img
   width: 100%
</style>
