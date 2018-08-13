import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Foreign from '@/pages/city/components/ForeignCities'
import Domestic from '@/pages/city/components/DomesticCities'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      redirect: '/city/domestic'
    }, {
      path: '/city',
      component: City,
      children: [
        {
          path: 'foreign',
          component: Foreign
        }, {
          path: 'domestic',
          component: Domestic
        }
      ]
    }
  ]
})
