import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
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
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
