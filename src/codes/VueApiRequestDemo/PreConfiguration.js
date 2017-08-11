export default [
  `import Vue from 'vue'
import VueApiRequest from 'vue-api-request'

let options = {
  effect: 'lightSpeedIn',
  resp: 'body.foo.bar',
  spinner: 'DotLoader',
  spinnerColor: 'blue', //or #0000ff
  spinnerPadding: '2em',
  spinnerScale: 1.4,
  onSuccess: resp => {
    console.log('Success', resp)
  },
  onError: resp => {
    alert(\`Error: \${resp.message}\`)
  }
}

Vue.use(VueApiRequest, options)
`,
  `<api-request
  :resource="apiRequest"
  v-model="apiResponse"
  effect="lightSpeedIn"
  resp="body.foo.bar"
  spinner="DotLoader"
  spinner-color="blue"
  spinner-padding="2em"
  :spinner-scale="1.4"
  @success="successEvent"
  @error="errorEvent"
>
  My stuffs to be shown when the API loads
</api-request>
`
]

