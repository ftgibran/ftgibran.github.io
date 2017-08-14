let firstExample = {
  show: true,
  response: {}
}

let fakeExample = {
  show: true,
  response: {}
}

let likeExample = {
  trigger: false,
  liked: false
}

let triggerExample = {
  show: true,
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

let serialExample = {
  show: true,
  response1: {},
  response2: {},
  response3: {},
  trigger: false
}

let parallelExample = {
  show: true,
  resource: (api) => ({
    request1: api.fakeRequest(1000, 'First Response'),
    request2: api.fakeRequest(2000, 'Second Response'),
    request3: api.fakeRequest(3000, 'Third Response')
  }),
  response: {},
  trigger: false
}

let customizeExample = {
  show: true,
  effect: 'lightSpeedIn',
  spinner: 'DotLoader',
  spinnerColor: '#FC6194',
  spinnerPadding: '60px',
  spinnerScale: 1.5
}

let customEffectExample = {
  show: true
}

let customSpinnerExample = {
  show: true
}

/** Export ***********************************************/
export default {
  firstExample,
  fakeExample,
  likeExample,
  triggerExample,
  conditionalExample,
  eventsExample,
  serialExample,
  parallelExample,
  customizeExample,
  customEffectExample,
  customSpinnerExample
}
