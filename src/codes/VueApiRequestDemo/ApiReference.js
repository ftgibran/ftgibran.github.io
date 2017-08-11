export default {
  props: {
    resource: [
      `resource () {
  return Promise.resolve('myResponse')
}
`,
      `<api-request :resource="resource" v-model="response"></api-request>
`,
      `response = 'myResponse'
`,
      `resource = {
  foo: () => Promise.resolve('myFooResponse'),
  bar: () => Promise.resolve('myBarResponse')
}
`,
      `<api-request :resource="resource" v-model="response"></api-request>
`,
      `response = {
  foo: 'myFooResponse'
  bar: 'myBarResponse'
}
`
    ],
    params: [
      `resource (myResponse) {
  return Promise.resolve(myResponse)
}
`,
      `<api-request :resource="resource" :params="'Hello Vue'"></api-request>
`,
      `resource = {
  foo: (myFooResponse) => Promise.resolve(myFooResponse),
  bar: (myBarResponse) => Promise.resolve(myBarResponse)
}
`,
      `<api-request :resource="resource" :params="{foo: 'Hello Foo', bar: 'Hello Bar'}"></api-request>
`],
    resp: [
      `response = {
  foo: {
    bar: {}
  }
}
`
    ]
  },
  slots: {
    default: [
      `<api-request>
  <!--Success Slot-->
</api-request>
`],
    waiting: [
      `<api-request>
  <div slot="waiting">
    <!--Content before the call-->
    <!--It keeps in this state until you fetch it-->
    <!--After the call, the state returns to waiting-->
  </div>
</api-request>
`,
      `<api-request>
  <div slot="waiting">
    <!--If the response is success, the content of success slot will appear-->
    <!--If the response fails, the state returns to waiting because there is no error slot set-->
  </div>
  <div slot="success">
  </div>
</api-request>
`
    ]
  },
  methods: {
    fetch: [
      `<api-request ref="myComponent" :resource="myResource" v-model="myResponse">
  <div slot="waiting">
    <button @click="$refs.myComponent.fetch()">Request Now</button>
  </div>
  <div slot="success">My stuffs to be shown</div>
</api-request>
`,
      `myResource = {
  foo: () => Promise.resolve(true),
  bar: () => Promise.resolve(true)
}
`,
      `<api-request ref="myComponent" :resource="myResource" v-model="myResponse">
  <div slot="waiting">
    <button @click="$refs.myComponent.fetch('foo')">Request foo API Now</button>
  </div>
  <div slot="success">My stuffs to be shown</div>
</api-request>
`
    ]
  }
}
