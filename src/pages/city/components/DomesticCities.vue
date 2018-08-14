<template>
  <div class="list">
<hot-city :hotCities="hotCities"></hot-city>

<search-city :cities="cities" @change="handleLetterChange"></search-city>

<city-list :cities="cities"
           :letter="letter"></city-list>
  </div>
</template>

<script>
import SearchCity from './components/SearchCity'
import HotCity from './components/HotCities'
import CityList from './components/CityList'
import axios from 'axios'
export default {
  name: 'DomesticCities',
  components: {
    SearchCity,
    HotCity,
    CityList
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/domesticcity.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
