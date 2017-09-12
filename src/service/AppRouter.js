import Vue from 'vue'
import Router from 'vue-router'
import VueApiRequestDemo from '../components/VueApiRequestDemo.vue'
import CrossDomainCallback from '../components/CrossDomainCallback.vue'

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
    },
    {
      path: '/cross-domain-callback',
      component: CrossDomainCallback
    }
  ]
})
