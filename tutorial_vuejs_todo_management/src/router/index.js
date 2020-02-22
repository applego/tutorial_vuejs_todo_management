import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ColorSelect from  '@/components/ColorSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/colorselect',
      name: 'ColorSelect',
      component: ColorSelect
    }
  ]
})
