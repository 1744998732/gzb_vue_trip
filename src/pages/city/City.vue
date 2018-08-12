<template>
<div>
    <city-header></city-header>
    <city-search></city-search>
    <keep-alive>
    <router-view/>
        </keep-alive>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'Home',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>

</style>
