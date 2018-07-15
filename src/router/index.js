import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import List from '@/pages/list/List'
import Xiangqing from '@/pages/xiangqingye/Xiangqing'
import Chengshi from '@/pages/Chengshiye/Chengshi'




Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/xqy/:id',
      name: 'Xiangqing',
      component: Xiangqing
    },
    {
      path: '/csy',
      name: 'Chengshi',
      component: Chengshi
    }
  ]
})
