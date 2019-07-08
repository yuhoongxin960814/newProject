import Vue from 'vue'
import Router from 'vue-router'


// import HelloWorld from '../components/HelloWorld'
import HelloWorld from '@/components/HelloWorld'
import Shuyingyin from '@/components/dibu/shuyingyin'
import Guangbo from '@/components/dibu/guangbo'
import Wd from '@/components/dibu/wd'
import Xiaozu from '@/components/dibu/xiaozu'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
    },
    {
      path:'/shuyingyin',
      component:Shuyingyin
    },
    {
      path:'/guangbo',
      component:Guangbo
    },
    {
      path:'/wd',
      component:Wd
    },
    {
      path:'/xiaozu',
      component:Xiaozu
    }
  
  ],
  
})
