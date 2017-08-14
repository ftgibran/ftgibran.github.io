import Vue from 'vue'
// import axios from 'axios'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  fakeRequest: (time = 1000, response = true) => () => new Promise(resolve => {
    setTimeout(() => resolve(response), time)
  }),
  fakeRequestError: (time = 1000, response = true) => () => new Promise((resolve, reject) => {
    setTimeout(() => reject(response), time)
  }),
  giphyRandom: (params = {}) => Vue.http.get(`//api.giphy.com/v1/gifs/random`, {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      tag: params.tag,
      rating: params.rating
    }
  }),
  giphySearch: (params = {}) => Vue.http.get(`//api.giphy.com/v1/gifs/search`, {
    params: {
      api_key: 'ceea3d73eee446f48e2a645e117b1f31',
      q: params.q,
      limit: params.limit,
      offset: params.offset
    }
  }),
  hipolabsUni: (query) => Vue.http.get(`//universities.hipolabs.com`, {
    params: { query }
  })
}
