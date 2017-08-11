let basicUsage = []
let preConfiguration = []

let docs = []
docs[0] = []
docs[1] = []
docs[2] = []
docs[3] = []
docs[4] = []
docs[5] = []
docs[6] = []
docs[7] = []
docs[8] = []
docs[9] = []
docs[10] = []
docs[11] = []
docs[12] = []

let apiReference = []
apiReference[0] = []
apiReference[1] = []
apiReference[2] = []
apiReference[3] = []

/** Basic Usage ***********************************************/
basicUsage[0] =
  `import Vue from 'vue'
import VueApiRequest from 'vue-api-request'
Vue.use(VueApiRequest)
`
basicUsage[1] =
  `<api-request :resource="apiRequest" v-model="apiResponse">
  My stuffs to be shown when the API loads
</api-request>
`

/** Pre Configuration ***********************************************/
preConfiguration[0] =
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
`
preConfiguration[1] =
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
/** Request Usage ***********************************************/
docs[0][0] =
  `<template>
  <api-request :resource="giphyRandom" v-model="myResponse">
    <img v-if="myResponse" :src="myResponse.body.data.image_url"/>
  </api-request>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import VueApiRequest from 'vue-api-request'
  
  Vue.use(VueResource)
  Vue.use(VueApiRequest)

  export default {
    data () {
      return {
        myResponse: null
      }
    },
    methods: {
      giphyRandom () {
        return Vue.http.get('http://api.giphy.com/v1/gifs/random', {
          params: {
            api_key: 'ceea3d73eee446f48e2a645e117b1f31'
          }
        })
      }
    }
  }
</script>
`

/** Request with Params ***********************************************/

docs[1][0] =
  `giphyRandom (tag) {
  return Vue.http.get('http://api.giphy.com/v1/gifs/random', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag
    }
  })
}
`

docs[1][1] =
  `<api-request :resource="giphyRandom" params="food" v-model="myResponse">
  <img v-if="myResponse" :src="myResponse.body.data.image_url"/>
</api-request>
`

docs[1][2] =
  `giphyRandom (params) {
  return Vue.http.get('http://api.giphy.com/v1/gifs/random', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag: params.tag
      rating: params.rating
    }
  })
}
`

docs[1][3] =
  `<api-request 
  :resource="giphyRandom" 
  :params="{tag: 'food', rating: 'g'}" 
  v-model="myResponse"
>
      <img v-if="myResponse" :src="myResponse.body.data.image_url"/>
</api-request>
`

/** Fake Requests ***********************************************/
docs[2][0] =
  `<template>
  <api-request :resource="fakeRequest" :params="3000" v-model="fakeResponse">
    Hello, I am a fake request and my response is: <code>{{fakeResponse}}</code>
  </api-request>
</template>

<script>
  import Vue from 'vue'
  import VueApiRequest from 'vue-api-request'
  
  Vue.use(VueApiRequest)

  export default {
    data () {
      return {
        fakeResponse: null
      }
    },
    methods: {
      fakeRequest(time) {
        return new Promise(resolve => {
          setTimeout(() => resolve('My fake Request'), time)
        })
      }
    }
  }
</script>
`

/** Global Request Access from $api ***********************************************/
docs[3][0] =
  `import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)

export default {
  foo: (params) => Vue.http.get('/foo', {params}),
  bar: (params) => axios.get('/bar', {params}),
}
`

docs[3][1] =
  `import Vue from 'vue'
import VueApiRequest from 'vue-api-request'
import api from 'api.js'

VueApiRequest.setAPI(api)
Vue.use(VueApiRequest)
`

docs[3][2] =
  `<api-request
  :resource="$api.foo"
  :params="{id:1}"
  v-model="foo"
>
  My stuffs
</api-request>

<!--or-->

<api-request
  :resource="$api.bar"
  :params="{slug:'abc'}"
  v-model="bar"
>
  My stuffs
</api-request>
`
/** Trigger & Sync Requests using Waiting Slot ***********************************************/
docs[4][0] = `$api = {
  fakeRequest: (params) => new Promise(resolve => {
    setTimeout(() => resolve(params.response), params.time)
  })
}
`
docs[4][1] = `<template>
  <button @click="trigger=true">

    <api-request
      :resource="$api.fakeRequest"
      :params="{time: 1000, response: !liked}"
      v-model="liked"
      :trigger.sync="trigger"
      :spinner-scale="0.55"
      :spinner-padding="0"
    >
      <span slot="waiting">
          {{liked ? 'You liked' : 'Like'}}
      </span>
    </api-request>

  </button>
</template>

<script>
  // Don't forget to set your $api
  export default {
    data () {
      return {
        trigger: false,
        liked: false
      }
    }
  }
</script>
`

docs[4][2] = `$api = {
  giphySearch: (params) => Vue.http.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      q: params.q,
      limit: params.limit,
      offset: params.offset
    }
  })
}
`
docs[4][3] = `<template>
  <div>
    <api-request
      :resource="$api.giphySearch"
      :params="{q, offset, limit: 3}"
      v-model="response"
      :trigger.sync="trigger"
      :sync="offset"
    >
    
      <form slot="waiting" @submit.prevent="trigger=true">
        <input type="text" placeholder="Type something" v-model="q"/>
        <button>Search</button>
      </form>
      
      <div slot="success">
        <div v-if="response">
          <div v-for="item in response.body.data">
            <img :src="item.images.fixed_width.url"/>
          </div>
        </div>
      </div>
      
    </api-request>

    <div v-if="response">
      <span>
        <button @click="offset -= offset == 0 ? 0:3">Previous</button>
      </span>
      <span>
        {{offset / 3 + 1}}
      </span>
      <span>
        <button @click="offset += 3">Next</button>
      </span>
    </div>
    
  </div>
</template>

<script>
  // Don't forget to set your $api
  export default {
    data () {
      return {
        trigger: false,
        q: null,
        offset: 0,
        response: null
      }
    }
  }
</script>
`

docs[5][0] = `$api = {
  giphyRandom: () => Vue.http.get('//api.giphy.com/v1/gifs/random', {
    params: { api_key: 'ceea3d73eee446f48e2a645e117b1f31' }
  }),
}
`
docs[5][1] = `<template>
  <api-request
    :resource="$api.giphyRandom"
    v-model="response"
    :trigger.sync="trigger"
    :only-if="canRefresh"
  >
    <label>
      <input type="checkbox" v-model="canRefresh"/> Can Refresh
    </label>
    <button @click="trigger=true">Refresh GIF</button>

    <img v-if="response" :src="response.body.data.image_url"/>
  </api-request>
</template>
  
<script>
  // Don't forget to set your $api
  export default {
    data () {
      return {
        trigger: false,
        canRefresh: true,
        response: null
      }
    }
  }
</script>
`

docs[6][0] = `$api = {
  fakeRequest: (response) => new Promise(resolve => {
    setTimeout(() => resolve(response), 1000)
  }),
  fakeRequestError: (response) => new Promise((resolve, reject) => {
    setTimeout(() => reject(response), 1000)
  })
}
`

docs[6][1] = `<template>
  <div>
    <api-request
      :resource="$api.fakeRequest"
      :trigger.sync="triggerWaiting"
      @waiting="waitingEvent"
    >
      <div slot="waiting">
        <button @click="triggerWaiting=true">Waiting Example</button>
      </div>
    </api-request>

    <api-request
      :resource="$api.fakeRequest"
      :trigger.sync="triggerLoading"
      @loading="loadingEvent"
    >
      <div slot="waiting">
        <button @click="triggerLoading=true">Loading Example</button>
      </div>
    </api-request>

    <api-request
      :resource="$api.fakeRequest"
      :params="'successResp'"
      :trigger.sync="triggerSuccess"
      @success="successEvent"
    >
      <div slot="waiting">
        <a @click="example.eventsExample.triggerSuccess=true"
           class="btn btn-default"
        >Success Example</a>
      </div>
      <div slot="success">Success</div>
    </api-request>

    <api-request
      :resource="$api.fakeRequestError"
      :params="'errorResp'"
      :trigger.sync="triggerError"
      @error="errorEvent"
    >
      <div slot="waiting">
        <button @click="triggerError=true">Error Example</button>
      </div>
      <div slot="error">Error</div>
    </api-request>

    <api-request
      :resource="$api.fakeRequest"
      :params="'loadedResp'"
      :trigger.sync="triggerLoaded"
      @loaded="loadedEvent"
    >
      <div slot="waiting">
        <button @click="triggerLoaded=true">Loaded Example</button>
      </div>
      <div slot="loaded">Loaded</div>
    </api-request>
  </div>
</template>

<script>
  // Don't forget to set your $api
  export default {
    data () {
      return {
        triggerWaiting: false,
        triggerLoading: false,
        triggerSuccess: false,
        triggerError: false,
        triggerLoaded: false
      }
    },
    methods: {
      waitingEvent () {
        alert('Request is waiting!')
      },
      loadingEvent () {
        alert('Request is loading!')
      },
      successEvent (resp) {
        alert('Success with response: ' + resp)
      },
      errorEvent (resp) {
        alert('Error with response: ' + resp)
      },
      loadedEvent (resp) {
        alert('Loaded (success or error) with response: ' + resp)
      }
    }
  }
</script>
`

/** API Reference ***********************************************/
apiReference[0][0] = `resource () {
  return Promise.resolve('myResponse')
}
`

apiReference[0][1] = `<api-request :resource="resource" v-model="response"></api-request>
`

apiReference[0][2] = `response = 'myResponse'
`

apiReference[0][3] = `resource = {
  foo: () => Promise.resolve('myFooResponse'),
  bar: () => Promise.resolve('myBarResponse')
}
`

apiReference[0][4] = `<api-request :resource="resource" v-model="response"></api-request>
`

apiReference[0][5] = `response = {
  foo: 'myFooResponse'
  bar: 'myBarResponse'
}
`

apiReference[1][0] = `resource (myResponse) {
  return Promise.resolve(myResponse)
}
`

apiReference[1][1] = `<api-request :resource="resource" :params="'Hello Vue'"></api-request>
`

apiReference[1][2] = `resource = {
  foo: (myFooResponse) => Promise.resolve(myFooResponse),
  bar: (myBarResponse) => Promise.resolve(myBarResponse)
}
`

apiReference[1][3] = `<api-request :resource="resource" :params="{foo: 'Hello Foo', bar: 'Hello Bar'}"></api-request>
`

apiReference[1][4] = `response = {
  foo: {
    bar: {}
  }
}
`

apiReference[2][0] = `<api-request>
  <!--Success Slot-->
</api-request>
`

apiReference[2][1] = `<api-request>
  <div slot="waiting">
    <!--Content before the call-->
    <!--It keeps in this state until you fetch it-->
    <!--After the call, the state returns to waiting-->
  </div>
</api-request>
`

apiReference[2][2] = `<api-request>
  <div slot="waiting">
    <!--If the response is success, the content of success slot will appear-->
    <!--If the response fails, the state returns to waiting because there is no error slot set-->
  </div>
  <div slot="success">
  </div>
</api-request>
`

apiReference[3][0] = `<api-request ref="myComponent" :resource="myResource" v-model="myResponse">
  <div slot="waiting">
    <button @click="$refs.myComponent.fetch()">Request Now</button>
  </div>
  <div slot="success">My stuffs to be shown</div>
</api-request>
`

apiReference[3][1] = `myResource = {
  foo: () => Promise.resolve(true),
  bar: () => Promise.resolve(true)
}
`

apiReference[3][2] = `<api-request ref="myComponent" :resource="myResource" v-model="myResponse">
  <div slot="waiting">
    <button @click="$refs.myComponent.fetch('foo')">Request foo API Now</button>
  </div>
  <div slot="success">My stuffs to be shown</div>
</api-request>
`

/** Export ***********************************************/
export default {
  basicUsage,
  preConfiguration,
  docs,
  apiReference
}
