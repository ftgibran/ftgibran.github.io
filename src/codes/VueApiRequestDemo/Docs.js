export default [
  /** Request Usage ***********************************************/
  [
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
  ],
  /** Request with Params ***********************************************/
  [
    `giphyRandom (tag) {
  return Vue.http.get('http://api.giphy.com/v1/gifs/random', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag
    }
  })
}
`,
    `<api-request :resource="giphyRandom" params="food" v-model="myResponse">
  <img v-if="myResponse" :src="myResponse.body.data.image_url"/>
</api-request>
`,
    `giphyRandom (params) {
  return Vue.http.get('http://api.giphy.com/v1/gifs/random', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag: params.tag
      rating: params.rating
    }
  })
}
`,
    `<api-request 
  :resource="giphyRandom" 
  :params="{tag: 'food', rating: 'g'}" 
  v-model="myResponse"
>
      <img v-if="myResponse" :src="myResponse.body.data.image_url"/>
</api-request>
`
  ],
  /** Fake Requests ***********************************************/
  [
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
  ],
  /** Global Request Access from $api ***********************************************/
  [
    `import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)

export default {
  foo: (params) => Vue.http.get('/foo', {params}),
  bar: (params) => axios.get('/bar', {params}),
}
`,
    `import Vue from 'vue'
import VueApiRequest from 'vue-api-request'
import api from 'api.js'

VueApiRequest.setAPI(api)
Vue.use(VueApiRequest)
`,
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
  ],
  /** Trigger & Sync Requests using Waiting Slot ***********************************************/
  [
    `$api = {
  fakeRequest: (params) => new Promise(resolve => {
    setTimeout(() => resolve(params.response), params.time)
  })
}
`,
    `<template>
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
`,
    `$api = {
  giphySearch: (params) => Vue.http.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      q: params.q,
      limit: params.limit,
      offset: params.offset
    }
  })
}
`,
    `<template>
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
  ],
  /** Conditional Request ***********************************************/
  [
    `$api = {
  giphyRandom: () => Vue.http.get('//api.giphy.com/v1/gifs/random', {
    params: { api_key: 'ceea3d73eee446f48e2a645e117b1f31' }
  }),
}
`,
    `<template>
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
  ],
  /** Using Events ***********************************************/
  [
    `$api = {
  fakeRequest: (response) => new Promise(resolve => {
    setTimeout(() => resolve(response), 1000)
  }),
  fakeRequestError: (response) => new Promise((resolve, reject) => {
    setTimeout(() => reject(response), 1000)
  })
}
`,
    `<template>
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
  ]
]

