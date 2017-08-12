// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppRouter from './service/AppRouter'
import AppResource from './service/AppResource'
import { TweenLite, Power2 } from 'gsap'

import VueHead from 'vue-head'
import VueApiRequest from 'vue-api-request'

Vue.use(VueHead)
VueApiRequest.setAPI(AppResource)
VueApiRequest.addEffect('blur', el => {
  el.style.filter = 'blur(20px)'
  TweenLite.to(el, 1, {filter: 'blur(0)', ease: Power2.easeOut})
})
Vue.use(VueApiRequest)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: AppRouter,
  template: '<App/>',
  components: { App }
})
