
let firstExample = {
  response: {}
}

let fakeExample = {
  response: {}
}

let likeExample = {
  trigger: false,
  liked: false
}

let triggerExample = {
  trigger: false,
  q: null,
  offset: 0,
  response: {}
}

let conditionalExample = {
  trigger: false,
  canRefresh: true,
  response: null
}

let eventsExample = {
  show: false,
  triggerWaiting: false,
  triggerLoading: false,
  triggerSuccess: false,
  triggerError: false,
  triggerLoaded: false,
  waiting: () => alert('Request is waiting!'),
  loading: () => alert('Request is loading!'),
  success: (resp) => alert('Success with response: ' + resp),
  error: (resp) => alert('Error with response: ' + resp),
  loaded: (resp) => alert('Loaded (success or error) with response: ' + resp)
}

/** Export ***********************************************/
export default {
  firstExample,
  fakeExample,
  likeExample,
  triggerExample,
  conditionalExample,
  eventsExample
}
