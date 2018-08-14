<template>
    <div class="cityselect">
      <div class="title">字母排序</div>
    <ul class="item-wrapper" >
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
    >{{item}}</li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'SearchCity',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
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
    padding .3rem 0
    .item
      width calc(100% / 6)
      height 0.9rem
      line-height 0.9rem
      text-align center
</style>
