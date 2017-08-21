// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppRouter from './service/AppRouter'
import AppResource from './service/AppResource'
import { TweenLite, Power2 } from 'gsap'
import 'font-awesome/css/font-awesome.css'
import CustomLoader from './components/CustomLoader.vue'

import VueAnalytics from 'vue-analytics'
import VueApiRequest from 'vue-api-request'
import VueHead from 'vue-head'

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-75058768-2',
    router: AppRouter,
    autoTracking: {
      exception: true
    }
  })
}
Vue.use(VueHead)

VueApiRequest.setAPI(AppResource)
VueApiRequest.addLoader('CustomLoader', CustomLoader)
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
  components: {App}
})
