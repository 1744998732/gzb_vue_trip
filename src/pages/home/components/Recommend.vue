<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl" />
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">11111</p>
              <button class="item-button">查看详情</button>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/12/126471e0966aca5ba3.img.jpg_200x200_f1286016.jpg',
        title: '北京国际鲜花港'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
        title: '北京欢乐谷'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display flex
    height 1.9rem
    .item-img
       width 1.7rem
       height 1.7rem
       padding .1rem
    .item-info
       flex: 1
       padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color  #fff
</style>
