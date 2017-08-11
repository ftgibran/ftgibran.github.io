export default [
  `import Vue from 'vue'
import VueApiRequest from 'vue-api-request'
Vue.use(VueApiRequest)
`,
  `<api-request :resource="apiRequest" v-model="apiResponse">
  My stuffs to be shown when the API loads
</api-request>
`
]

