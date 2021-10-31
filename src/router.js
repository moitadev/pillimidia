import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: function () { 
        return import(/* webpackChunkName: "sobre" */ './views/sobre.vue')
      }
    },
    {
      path: '/amazonprime',
      name: 'amazonprime',
      component: function () { 
        return import(/* webpackChunkName: "amazonprime" */ './views/amazonprime.vue')
      }
    },
    {
      path: '/camaro',
      name: 'camaro',
      component: function () { 
        return import(/* webpackChunkName: "camaro" */ './views/camaro.vue')
      }
    },
    {
      path: '/cruze',
      name: 'cruze',

      component: function () { 
        return import(/* webpackChunkName: "cruze" */ './views/cruze.vue')
      }
    },
    {
      path: '/dji',
      name: 'dji',

      component: function () { 
        return import(/* webpackChunkName: "dji" */ './views/dji.vue')
      }
    },
    {
      path: '/intel',
      name: 'intel',

      component: function () { 
        return import(/* webpackChunkName: "intel" */ './views/intel.vue')
      }
    },
    {
      path: '/jaguar',
      name: 'jaguar',

      component: function () { 
        return import(/* webpackChunkName: "jaguar" */ './views/jaguar.vue')
      }
    },
    {
      path: '/landrover',
      name: 'landrover',

      component: function () { 
        return import(/* webpackChunkName: "landrover" */ './views/landrover.vue')
      }
    },
    {
      path: '/leroymerlin',
      name: 'leroymerlin',

      component: function () { 
        return import(/* webpackChunkName: "leroymerlin" */ './views/leroymerlin.vue')
      }
    },
    {
      path: '/onix',
      name: 'onix',

      component: function () { 
        return import(/* webpackChunkName: "onix" */ './views/onix.vue')
      }
    },
    {
      path: '/sony',
      name: 'sony',

      component: function () { 
        return import(/* webpackChunkName: "sony" */ './views/sony.vue')
      }
    },
    {
      path: '/volkswagen',
      name: 'volkswagen',

      component: function () { 
        return import(/* webpackChunkName: "volkswagen" */ './views/volkswagen.vue')
      }
    },
    {
      path: '/volvo',
      name: 'volvo',

      component: function () { 
        return import(/* webpackChunkName: "volvo" */ './views/volvo.vue')
      }
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
