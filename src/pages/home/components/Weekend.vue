<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
            </div>
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
        title: '漂流勇进，烧烤露营',
        desc: '轻松水上漂，任我乐逍遥'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
        title: '北京清凉避暑胜地',
        desc: '到大自然中享受“天然空调”的清凉'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
        title: '北京必游TOP10',
        desc: '来北京必去的景点非这些地方莫属'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 38%
    .item-img
       width 100%
    .item-info
       padding .2rem
      .item-title
        line-height .48rem
        font-size .28rem
        ellipsis()
      .item-desc
        line-height: .4rem
        font-size .2rem
        color: #616161
        ellipsis()
</style>
