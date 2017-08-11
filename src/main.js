// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppRouter from './service/AppRouter'
import AppResource from './service/AppResource'

import VueHead from 'vue-head'
import VueApiRequest from 'vue-api-request'

Vue.use(VueHead)
VueApiRequest.setAPI(AppResource)
Vue.use(VueApiRequest)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: AppRouter,
  template: '<App/>',
  components: { App }
})
