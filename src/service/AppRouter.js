import Vue from 'vue'
import Router from 'vue-router'
import VueApiRequestDemo from '../components/VueApiRequestDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/vue-api-request'
    },
    {
      path: '/vue-api-request',
      component: VueApiRequestDemo
    }
  ]
})
