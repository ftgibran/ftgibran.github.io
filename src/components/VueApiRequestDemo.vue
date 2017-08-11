<template>
  <main>
    <section id="home">
      <div class="container">

        <api-request
          :resource="$api.fakeRequest(2000)"
          effect="lightSpeedIn"
          spinner="DotLoader"
          spinner-color="#FC6194"
          :spinner-scale="2"
          class="full-width"
        >
          <div class="row">
            <div class="col col-md-8 col-md-offset-2">
              <img src="../assets/v-api@512.png" alt="Vue Api Request"/>

              <div class="v-api-logo">API REQUEST</div>

              <api-request
                :resource="$api.fakeRequest(2500)"
                effect="zoomIn"
                spinner="SyncLoader"
                spinner-color="#FC6194"
                :spinner-scale="1"
                spinner-padding="32px"
              >
                <h1>Documentation</h1>
                <hr/>
              </api-request>

              <api-request
                :resource="$api.fakeRequest(3500)"
                effect="bounceIn"
                spinner="MoonLoader"
                spinnerColor="#FC6194"
                :spinnerScale="0.7"
                spinnerPadding="8px"
              >
                <a @click="scrollTo('#summary')" class="btn btn-primary btn-lg">
                  Getting Started & Examples
                </a>
                <a href="//github.com/ftgibran/vue-api-request" target="_blank" class="btn btn-info btn-lg">
                  View on Github
                </a>
              </api-request>
            </div>
          </div>
        </api-request>

      </div>
    </section>

    <section id="summary">
      <div class="container">
        <h2>Summary</h2>

        <hr/>

        <fieldset class="row">
          <ul class="list-unstyled col-md-6 col-md-offset-3">
            <li>
              <a @click="scrollTo('#getting-started')">Getting Started</a>
              <ul>
                <li>
                  <a @click="scrollTo('#installation')">Installation</a>
                </li>
                <li>
                  <a @click="scrollTo('#basic-usage')">Basic Usage</a>
                </li>
                <li>
                  <a @click="scrollTo('#pre-configuration')">Pre Configuration</a>
                </li>
              </ul>
            </li>
            <hr/>
            <li>
              <a @click="scrollTo('#explanations')">Explanations & Examples</a>
              <ol>
                <li><a @click="scrollTo('#exp_1')">First Step</a></li>
                <li><a @click="scrollTo('#exp_2')">Request with Params</a></li>
                <li><a @click="scrollTo('#exp_3')">Fake Requests</a></li>
                <li><a @click="scrollTo('#exp_4')">Global Request Access from $api</a></li>
                <li><a @click="scrollTo('#exp_5')">Trigger & Sync Requests using Waiting Slot</a></li>
                <li><a @click="scrollTo('#exp_6')">Conditional Request</a></li>
                <li><a @click="scrollTo('#exp_7')">Using Events</a></li>
                <li><a @click="scrollTo('#exp_8')">Serial Requests</a></li>
                <li><a @click="scrollTo('#exp_9')">Parallel Requests</a></li>
                <li><a @click="scrollTo('#exp_10')">Error View Slot</a></li>
                <li><a @click="scrollTo('#exp_11')">Customize</a></li>
              </ol>
            </li>
            <hr/>
            <li>
              <a @click="scrollTo('#api')">API Reference</a>
              <ul>
                <li><a @click="scrollTo('#props')">Props</a></li>
                <li><a @click="scrollTo('#events')">Events</a></li>
                <li><a @click="scrollTo('#slots')">Slots</a></li>
                <li><a @click="scrollTo('#methods')">Methods</a></li>
                <li><a @click="scrollTo('#conf-methods')">Configuration Methods</a></li>
                <li><a @click="scrollTo('#conf-options')">Configuration Options</a></li>
              </ul>
            </li>

          </ul>
        </fieldset>
      </div>
    </section>

    <section id="getting-started">
      <div class="container">
        <h2>Getting Started</h2>

        <hr/>

        <fieldset id="installation">
          <h3>Installation</h3>

          <p>
            Package is installable via npm.
          </p>

          <pre>$ npm i vue-api-request --save</pre>
        </fieldset>

        <fieldset id="basic-usage">
          <h3>Basic Usage</h3>

          <p>
            You have to import the library and use as a Vue plugin to enable the functionality globally on all components.
          </p>

          <pre v-html="js(code['basicUsage'][0])"></pre>

          <h4>Example</h4>
          <pre v-html="html(code['basicUsage'][1])"></pre>

        </fieldset>

        <fieldset id="pre-configuration">
          <h3>Pre Configuration</h3>

          <p>
            You may also set your own default configuration, so you don't need to customize every time each ApiRequest component. You are still able to customize a specific component using props.
            Go to section <a @click="scrollTo('#conf-options')">API - Configuration Options</a> to further information.
          </p>

          <h4>Example</h4>
          <pre v-html="js(code['preConfiguration'][0])"></pre>

          <p>
            The 'options' variable above is equivalent of:
          </p>

          <pre v-html="html(code['preConfiguration'][1])"></pre>
        </fieldset>

      </div>
    </section>

    <section id="explanations">
      <div class="container">
        <h2>Explanations & Examples</h2>
        <hr/>

        <fieldset id="exp_1">
          <h3>1. First Step</h3>

          <p>
            Vue API Request provides a full control on your APIs, making the calls simple, fast and easy to implement.
            Also, your code will be cleaner and more elegant.
          </p>

          <p>
            In the first example, we gonna use a public API provided by
            <a href="https://developers.giphy.com/docs/" target="_blank">Giphy</a>
            which will generate a random Gif every time
            the component is mounted. Check it out:
          </p>

          <h4>Example</h4>

          <pre v-html="html(code['docs'][0][0])"></pre>

          <div class="row">

            <div class="col-md-4">

              <div class="panel panel-default panel-result">

                <div class="panel-heading">
                  <div class="pull-right">
                    <a @click="resetExamples()" class="btn btn-primary">Reload Example</a>
                  </div>
                  <h4>Result</h4>
                </div>

                <div class="panel-body text-center">

                  <api-request
                    :resource="$api.giphyRandom"
                    v-model="example.firstExample.response"
                    v-if="showExamples"
                  >
                    <img v-if="example.firstExample.response.body"
                         :src="example.firstExample.response.body.data.image_url"
                         class="img-responsive"
                         alt="giphy">
                  </api-request>

                </div>
              </div>

            </div>

            <div class="col-md-8">
              <h4>Response</h4>
              <pre>myResponse = {{example.firstExample.response}}</pre>
            </div>
          </div>

        </fieldset>

        <fieldset id="exp_2">
          <h3>2. Request with Params</h3>

          <h4>Simple parameter</h4>
          <p>If you only need a unique param, all you need is:</p>
          <pre v-html="js(code['docs'][1][0])"></pre>
          <pre v-html="html(code['docs'][1][1])"></pre>

          <h4>Multiple parameters</h4>
          <p>If you use more than one param, you have to use your param as an object:</p>
          <pre v-html="js(code['docs'][1][2])"></pre>
          <pre v-html="html(code['docs'][1][3])"></pre>

          <div class="alert alert-warning">
            <h4>Never do this, ever!</h4>
            <p>
              Normally, if you need params, you call the function with it: <code>func(a, b)</code>. However, using this concept
              in <code>:resource="giphyRandom('food', 'g')"</code>, the component will not work properly.
            </p>
            <p>
              <strong>Remind:</strong> The component requires a <code>Function</code> in <code>resource</code>,
              not its <code>Promise Object</code>.
            </p>
          </div>

        </fieldset>

        <fieldset id="exp_3">
          <h3>3. Fake Requests</h3>

          <p>
            Fake requests are useful for testing and other occasions.
            You only need to create a <code>Promise</code> with <code>setTimeout</code>
            and return it in a function. See the example below:
          </p>

          <h4>Example</h4>

          <div class="row">
            <div class="col-md-8">
              <pre v-html="html(code['docs'][2][0])"></pre>
            </div>

            <div class="col-md-4">

              <div class="panel panel-default panel-result">

                <div class="panel-heading">
                  <div class="pull-right">
                    <a @click="resetExamples()" class="btn btn-primary">Reload Example</a>
                  </div>
                  <h4>Result</h4>
                </div>

                <div class="panel-body text-center">

                  <api-request
                    :resource="$api.fakeRequest(3000, 'My fake Request')"
                    v-model="example.fakeExample.response"
                    v-if="showExamples"
                  >
                    Hello, I am a fake request and my response is: <code>{{example.fakeExample.response}}</code>
                  </api-request>

                </div>
              </div>

            </div>

          </div>

        </fieldset>

        <fieldset id="exp_4">
          <h3>4. Global Request Access from $api</h3>

          <p>
            It is possible to set global all your API Requests. To do this, let us create a new file <code>api.js</code>:
          </p>

          <h4>api.js</h4>
          <pre v-html="js(code['docs'][3][0])"></pre>

          <p>
            Here we import <code>api.js</code> and set it in VueApiRequest
          </p>
          <pre v-html="js(code['docs'][3][1])"></pre>

          <p>
            Now you have your APIs stored in the global variable <code>$api</code>. To use it, follow the example:
          </p>
          <h4>Example</h4>
          <pre v-html="html(code['docs'][3][2])"></pre>
        </fieldset>

        <fieldset id="exp_5">
          <h3>5. Trigger & Sync Requests using Waiting Slot</h3>

          <p>
            The <code>waiting slot</code> is very useful.
            It keeps component in waiting state, holding the request.
            So, you can call your API whenever you want by using <code>sync</code>, <code>trigger</code> or <code>fetch method</code>.
          </p>

          <p>
            By default, if you don't have any slot set, the <code>default slot</code> is <code>success slot</code>
            and the component will never hold the request.
            However, if there is only <code>waiting</code> set, the component will come back to waiting after loading.
            This is useful for some situations like <strong>toggle requests</strong>.
          </p>

          <h4>Example with trigger.sync</h4>

          <p>
            The <code>trigger.sync</code> parameter calls the API when its value is set to <strong>true</strong>.
            After the call, this variable changes to <strong>false</strong> automatically.
            <br/>
            In the first example, it shows you how to use <code>trigger.sync</code> by using like button.
          </p>

          <div class="alert alert-info">
            <p><strong>Trigger.sync</strong> is only available in Vue 2.3.0+</p>
            <p>
              If you have an older version, use
              <strong>
                <a @click="scrollTo('#methods_fetch')">
                  fetch method
                </a>
              </strong>.
            </p>
          </div>

          <div class="row">
            <div class="col-md-8">
              <pre v-html="js(code['docs'][4][0])"></pre>
              <pre v-html="html(code['docs'][4][1])"></pre>
            </div>
            <div class="col-md-4">

              <div class="panel panel-default panel-result">

                <div class="panel-heading">
                  <h4>Result</h4>
                </div>

                <div class="panel-body text-center">

                  <div>
                    <a @click="example.likeExample.trigger=true"
                       :style="{width: '120px'}"
                       class="btn btn-default btn-lg">

                      <api-request
                        :resource="$api.fakeRequest(1000, !example.likeExample.liked)"
                        v-model="example.likeExample.liked"
                        :trigger.sync="example.likeExample.trigger"
                        v-if="showExamples"
                        :spinner-scale="0.55"
                        :spinner-padding="0"
                      >
                  <span slot="waiting">
                      {{example.likeExample.liked ? 'You liked' : 'Like'}}
                  </span>
                      </api-request>

                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <h4>Example with sync and trigger.sync</h4>

          <p>
            The <code>sync</code> parameter calls the API whenever its value changes.
            <br/>
            The next example is a <strong>search query gif</strong> with pagination,
            using <code>sync</code> and <code>trigger.sync</code>.
          </p>

          <pre v-html="js(code['docs'][4][2])"></pre>
          <pre v-html="html(code['docs'][4][3])"></pre>

          <div class="panel panel-default panel-result">

            <div class="panel-heading">
              <div class="pull-right">
                <a @click="resetExamples()" class="btn btn-primary">Reload Example</a>
              </div>
              <h4>Result</h4>
            </div>

            <div class="panel-body text-center">

              <div>
                <api-request
                  :resource="$api.giphySearch"
                  :params="{q: example.triggerExample.q, offset: example.triggerExample.offset, limit: 3}"
                  v-model="example.triggerExample.response"
                  :trigger.sync="example.triggerExample.trigger"
                  :sync="example.triggerExample.offset"
                  v-if="showExamples"
                  :style="{minHeight: '250px'}"
                  class="div-section"
                >
                  <form slot="waiting" @submit.prevent="example.triggerExample.trigger=true">
                    <div class="form-group">
                      <input type="text" placeholder="Type something" v-model="example.triggerExample.q"/>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-default">Search</button>
                    </div>
                  </form>

                  <div slot="success">

                    <div class="row"
                         v-if="example.triggerExample.response.body">

                      <div v-for="item in example.triggerExample.response.body.data"
                           class="col-md-4">
                        <img :src="item.images.fixed_width.url"
                             class="img-responsive"
                             :style="{maxHeight: '250px'}"
                             alt="giphy">
                      </div>

                    </div>

                  </div>
                </api-request>

                <ul class="list-inline"
                    v-if="example.triggerExample.response.body">
                  <li>
                    <a @click="example.triggerExample.offset -= example.triggerExample.offset == 0 ? 0:3"
                       class="btn btn-default">Previous</a>
                  </li>
                  <li>
                    {{example.triggerExample.offset / 3 + 1}}
                  </li>
                  <li>
                    <a @click="example.triggerExample.offset += 3"
                       class="btn btn-default">Next</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </fieldset>

        <fieldset id="exp_6">
          <h3>6. Conditional Request</h3>

          Conditional request gives you one more option to easily control your requests.

          <h4>Example</h4>

          <div class="row">
            <div class="col-md-8">
              <pre v-html="html(code['docs'][5][0])"></pre>
              <pre v-html="html(code['docs'][5][1])"></pre>
            </div>

            <div class="col-md-4">

              <div class="panel panel-default panel-result">

                <div class="panel-heading">
                  <h4>Result</h4>
                </div>

                <div class="panel-body text-center">

                  <api-request
                    :resource="$api.giphyRandom"
                    v-model="example.conditionalExample.response"
                    :trigger.sync="example.conditionalExample.trigger"
                    :only-if="example.conditionalExample.canRefresh"
                  >

                    <ul class="list-inline">
                      <li>
                        <div class="checkbox">
                          <label>
                            <input type="checkbox" v-model="example.conditionalExample.canRefresh"> Can Refresh
                          </label>
                        </div>
                      </li>
                      <li>
                        <a @click="example.conditionalExample.trigger=true"
                           class="btn btn-default"
                        >Refresh GIF</a>
                      </li>
                    </ul>

                    <img v-if="example.conditionalExample.response"
                         :src="example.conditionalExample.response.body.data.image_url"
                         class="img-responsive"
                         alt="giphy">

                  </api-request>

                </div>
              </div>

            </div>
          </div>
        </fieldset>

        <fieldset id="exp_7">
          <h3>7. Using Events</h3>

          <div class="row">
            <div class="col-md-8">
              <pre v-html="html(code['docs'][6][0])"></pre>
              <pre v-html="html(code['docs'][6][1])"></pre>
            </div>

            <div class="col-md-4">

              <div class="panel panel-default panel-result">

                <div class="panel-heading">
                  <div class="pull-right">
                    <a @click="example.eventsExample.show=true"
                       v-if="!example.eventsExample.show"
                       class="btn btn-primary">Reveal Example</a>

                    <a @click="resetExamples"
                       v-if="example.eventsExample.show"
                       class="btn btn-primary">Reload Example</a>
                  </div>
                  <h4>Result</h4>
                </div>

                <div class="panel-body text-center">

                  <div v-if="example.eventsExample.show && showExamples">
                    <api-request
                      :resource="$api.fakeRequest(1000)"
                      :trigger.sync="example.eventsExample.triggerWaiting"
                      @waiting="example.eventsExample.waiting"
                    >
                      <div slot="waiting">
                        <a @click="example.eventsExample.triggerWaiting=true"
                           class="btn btn-default"
                        >Waiting Example</a>
                      </div>
                    </api-request>

                    <api-request
                      :resource="$api.fakeRequest(1000)"
                      :trigger.sync="example.eventsExample.triggerLoading"
                      @loading="example.eventsExample.loading"
                    >
                      <div slot="waiting">
                        <a @click="example.eventsExample.triggerLoading=true"
                           class="btn btn-default"
                        >Loading Example</a>
                      </div>
                    </api-request>

                    <api-request
                      :resource="$api.fakeRequest(1000, 'successResp')"
                      :trigger.sync="example.eventsExample.triggerSuccess"
                      @success="example.eventsExample.success"
                    >
                      <div slot="waiting">
                        <a @click="example.eventsExample.triggerSuccess=true"
                           class="btn btn-default"
                        >Success Example</a>
                      </div>
                      <div slot="success">Success</div>
                    </api-request>

                    <api-request
                      :resource="$api.fakeRequestError(1000, 'errorResp')"
                      :trigger.sync="example.eventsExample.triggerError"
                      @error="example.eventsExample.error"
                    >
                      <div slot="waiting">
                        <a @click="example.eventsExample.triggerError=true"
                           class="btn btn-default"
                        >Error Example</a>
                      </div>
                      <div slot="error">Error</div>
                    </api-request>

                    <api-request
                      :resource="$api.fakeRequest(1000, 'loadedResp')"
                      :trigger.sync="example.eventsExample.triggerLoaded"
                      @loaded="example.eventsExample.loaded"
                    >
                      <div slot="waiting">
                        <a @click="example.eventsExample.triggerLoaded=true"
                           class="btn btn-default"
                        >Loaded Example</a>
                      </div>
                      <div slot="loaded">Loaded</div>
                    </api-request>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </fieldset>

        <fieldset id="exp_8">
          <h3>8. Serial Requests</h3>
          #TODO
        </fieldset>

        <fieldset id="exp_9">
          <h3>9. Parallel Requests</h3>
          #TODO
        </fieldset>

        <fieldset id="exp_10">
          <h3>10. Error View Slot</h3>
          #TODO
        </fieldset>

        <fieldset id="exp_11">
          <h3>11. Customize</h3>
          #TODO
        </fieldset>

      </div>
    </section>

    <section id="api">
      <div class="container">
        <h2>API Reference</h2>
        <hr/>

        <fieldset id="props">
          <h3>Props</h3>

          <div class="table-responsive">

            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td><code>resource</code><strong class="grey">(required)</strong></td>
                <td>Function || Object</td>
                <td class="grey">none</td>
                <td>
                  <p>
                    This is where you set your API. It can be <code>single request</code>
                    or <code>multiple request</code>
                  </p>
                  <h5>Single request</h5>
                  <ul>
                    <li>
                      <p>
                        This is usually the most used. For this case, it has to be a <code>Function</code>
                        that returns a <code>Promise</code>.
                      </p>
                      <pre v-html="js(code['apiReference']['props']['resource'][0])"></pre>
                      <pre v-html="html(code['apiReference']['props']['resource'][1])"></pre>
                      <p>
                        For this example, the response will be:
                      </p>
                      <pre v-html="html(code['apiReference']['props']['resource'][2])"></pre>
                    </li>
                  </ul>
                  <h5>Multiple Request</h5>
                  <ul>
                    <li>
                      <p>
                        Also called as parallel request, it can call multiples APIs at the same and it only load when all APIs emit response.
                        For this case, it has to be an <code>Object</code> whose its keys values need to be a <code>Function</code>
                        that returns a <code>Promise</code>.
                        See <a @click="scrollTo('#exp_9')">Parallel Requests</a> section for details.
                      </p>
                      <pre v-html="js(code['apiReference']['props']['resource'][3])"></pre>
                      <pre v-html="html(code['apiReference']['props']['resource'][4])"></pre>
                      <p>
                        For this example, the response will be:
                      </p>
                      <pre v-html="js(code['apiReference']['props']['resource'][5])"></pre>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td><code>params</code></td>
                <td>any</td>
                <td class="grey">null</td>
                <td>
                  <p>
                    If your resource functions have parameters, you can set here.
                    See <a @click="scrollTo('#exp_2')">Request with Params</a> section for details.
                  </p>
                  <h5>Single request</h5>
                  <ul>
                    <li>
                      <p>
                        See example below:
                      </p>
                      <pre v-html="js(code['apiReference']['props']['params'][0])"></pre>
                      <pre v-html="html(code['apiReference']['props']['params'][1])"></pre>
                    </li>
                  </ul>

                  <h5>Multiple request</h5>
                  <ul>
                    <li>
                      <p>
                        See example below:
                      </p>
                      <pre v-html="js(code['apiReference']['props']['params'][2])"></pre>
                      <pre v-html="html(code['apiReference']['props']['params'][3])"></pre>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td><code>sync</code></td>
                <td>any</td>
                <td class="grey">null</td>
                <td>
                  <p>
                    It calls API whenever it changes its value.
                  </p>
                </td>
              </tr>

              <tr>
                <td><code>trigger.sync</code></td>
                <td>Boolean</td>
                <td class="grey">false</td>
                <td>
                  <p>
                    It calls API whenever it is set to <strong>true</strong>.
                    It is automatically set to <strong>false</strong> after the call.
                  </p>
                  <div class="alert alert-info">
                    <p><strong>Trigger.sync</strong> is only available in Vue 2.3.0+</p>
                    <p>
                      If you have an older version, use
                      <strong>
                        <a @click="scrollTo('#methods_fetch')">
                          fetch method
                        </a>
                      </strong>.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td><code>only-if</code></td>
                <td>Boolean</td>
                <td class="grey">true</td>
                <td>
                  <p>
                    Your API is called only if this parameter is <strong>true</strong>.
                  </p>
                </td>
              </tr>

              <tr>
                <td><code>effect</code></td>
                <td>String</td>
                <td class="grey">fadeIn</td>
                <td>
                  <p>
                    The effect to be shown when the content is loaded.
                    These effects are provided by
                    <a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a>.
                  </p>
                  <p>
                    <strong>Recommended Effects:</strong>
                    <br/>
                    <code>fadeIn</code>,
                    <code>fadeInDown</code>,
                    <code>fadeInUp</code>,
                    <code>zoomIn</code>,
                    <code>zoomInDown</code>,
                    <code>zoomInUp</code>,
                    <code>bounceIn</code>,
                    <code>flipInX</code>,
                    <code>flipInY</code>,
                    <code>lightSpeedIn</code>,
                    <code>rotateInDownLeft</code>,
                    <code>rotateInDownRight</code>,
                    <code>rotateInUpLeft</code>,
                    <code>rotateInUpRight</code>,
                    <code>jackInTheBox</code>
                  </p>
                </td>
              </tr>

              <tr>
                <td><code>resp</code></td>
                <td>String</td>
                <td class="grey">. <strong>(dot)</strong></td>
                <td>
                  <p>
                    Path of response data. Imagine this <strong>response</strong>:
                  </p>
                  <pre v-html="js(code['apiReference']['props']['resp'][0])"></pre>
                  <p>
                    if <code>resp="foo"</code>, the response is actually <code>response.foo</code>.
                    <br/>
                    if <code>resp="foo.bar"</code>, the response is actually <code>response.foo.bar</code>.
                    <br/>
                    if <code>resp="."</code>, the response keeps in <code>response</code>.
                  </p>
                  <p>
                    For <strong>Vue Resource</strong> calls, this is usually set to <code>body</code>
                  </p>
                  <p>
                    For <strong>axios</strong> calls, this is usually set to <code>data</code>
                  </p>
                </td>
              </tr>

              <tr>
                <td><code>spinner</code></td>
                <td>String</td>
                <td class="grey">ClipLoader</td>
                <td>
                  <p>
                    The spinner to be shown when the content is loading.
                    These spinners is provided by
                    <a href="http://greyby.github.io/vue-spinner/" target="_blank">greyby.github.io/vue-spinner/</a>.
                  </p>
                  <p>
                    <strong>Available Spinners:</strong>
                    <br/>
                    <code>PulseLoader</code>,
                    <code>GridLoader</code>,
                    <code>ClipLoader</code>,
                    <code>RiseLoader</code>,
                    <code>BeatLoader</code>,
                    <code>SyncLoader</code>,
                    <code>RotateLoader</code>,
                    <code>FadeLoader</code>,
                    <code>PacmanLoader</code>,
                    <code>SquareLoader</code>,
                    <code>ScaleLoader</code>,
                    <code>SkewLoader</code>,
                    <code>MoonLoader</code>,
                    <code>RingLoader</code>,
                    <code>BounceLoader</code>,
                    <code>DotLoader</code>
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>spinner-color</code></td>
                <td>String</td>
                <td class="grey">#42b983</td>
                <td>
                  <p>Hex color of Spinner.</p>
                </td>
              </tr>
              <tr>
                <td><code>spinner-padding</code></td>
                <td>String</td>
                <td class="grey">1em</td>
                <td>
                  <p>Padding of Spinner.</p>
                </td>
              </tr>
              <tr>
                <td><code>spinner-scale</code></td>
                <td>Number</td>
                <td class="grey">1</td>
                <td>
                  <p>
                    Size of Spinner. The value <code>1</code>
                    means its size is 100% of its original size.
                  </p>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

        <fieldset id="events">
          <h3>Events</h3>

          <div class="table-responsive">

            <table class="table table-striped">

              <thead>
              <tr>
                <th>Name</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td><code>@waiting</code></td>
                <td>none</td>
                <td>
                  <p>
                    Emits when the API from the component is waiting to be call.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>@loading</code></td>
                <td>none</td>
                <td>
                  <p>
                    Emits when the API from the component is loading.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>@success</code></td>
                <td>response</td>
                <td>
                  <p>
                    Emits when the API from component returns a success response.
                  </p>
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>response</code>: API response.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><code>@error</code></td>
                <td>response</td>
                <td>
                  <p>
                    Emits when the API from component returns a error response.
                  </p>
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>response</code>: API response.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><code>@loaded</code></td>
                <td>response</td>
                <td>
                  <p>
                    Emits when the API from component returns a response (success or error).
                  </p>
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>response</code>: API response.
                    </li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

        <fieldset id="slots">
          <h3>Slots</h3>

          <div class="table-responsive">

            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><code>default</code></td>
                <td>
                  <p>
                    If there is no other slot set, it corresponds the <code>success slot</code>.
                    Otherwise, it is disabled.
                  </p>

                  <pre v-html="html(code['apiReference']['slots']['default'][0])"></pre>

                </td>
              </tr>
              <tr>
                <td><code>waiting</code></td>
                <td>
                  <p>
                    This content is shown when the API from the component is waiting to be call.
                  </p>
                  <p>
                    <strong>
                      Note:
                    </strong>
                    if the <code>waiting slot</code>
                    slot is set, the component keeps its waiting state until you fetch it.
                    Otherwise, the component automatically fetches it.
                  </p>
                  <p>
                    <strong>
                      Note:
                    </strong>
                    if there is no <code>success slot</code>, <code>error slot</code> or <code>loaded slot</code>, the state of the component will return to <code>waiting</code>
                    after it fetches and loaded.
                  </p>

                  <pre v-html="html(code['apiReference']['slots']['waiting'][0])"></pre>
                  <pre v-html="html(code['apiReference']['slots']['waiting'][1])"></pre>

                </td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>
                  <p>
                    Replaces the standard loader and shows your custom loader
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>success</code></td>
                <td>
                  <p>
                    This content is shown when the API from component returns a success response.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>
                  <p>
                    This content is shown when the API from component returns a error response.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>loaded</code></td>
                <td>
                  <p>
                    This content is shown when the API from component returns a response (<code>success</code> or <code>error</code>).
                  </p>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

        <fieldset id="methods">
          <h3>Methods</h3>

          <div class="table-responsive">

            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
              </thead>

              <tbody>
              <tr id="methods_fetch">
                <td><code>fetch</code></td>
                <td><span class="grey">String</span> key</td>
                <td>
                  It calls the target API(s) instantly.
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>key</code>: Name of API in the list to be call. If this parameter is not set, it will call all the APIs from the list.
                    </li>
                  </ul>
                  <h5>Example</h5>
                  <pre v-html="html(code['apiReference']['methods']['fetch'][0])"></pre>
                  <h5>Example using key param</h5>
                  <pre v-html="html(code['apiReference']['methods']['fetch'][1])"></pre>
                  <pre v-html="html(code['apiReference']['methods']['fetch'][2])"></pre>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

        <fieldset id="conf-methods">
          <h3>Configuration Methods</h3>

          <div class="table-responsive">

            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><code>setAPI</code></td>
                <td><span class="grey">Object</span> api</td>
                <td>
                  It will set the global <code>$api</code> variable.
                  See <a @click="scrollTo('#exp_4')">this example</a>.
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>api</code>: Object to be set
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><code>addEffect</code></td>
                <td><span class="grey">String</span> name, <span class="grey">Function</span> effect</td>
                <td>
                  Add a custom effect.
                  <h5>Params</h5>
                  <ul>
                    <li>
                      <code>name</code>: Name of effect. It will replace if it already exists.
                    </li>
                    <li>
                      <code>effect</code>: Function that makes the the effect.
                      See <a @click="scrollTo('#exp_11')">this example</a>.
                    </li>
                  </ul>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

        <fieldset id="conf-options">
          <h3>Configuration Options</h3>

          <div class="table-responsive">

            <table class="table table-striped">
              <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td><code>effect</code></td>
                <td>String</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">effect</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>resp</code></td>
                <td>String</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">resp</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>spinner</code></td>
                <td>String</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">spinner</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>spinnerColor</code></td>
                <td>String</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">spinner-color</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>spinnerPadding</code></td>
                <td>String</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">spinner-padding</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>spinnerScale</code></td>
                <td>Number</td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#props')">spinner-scale</a> props.
                    <br/>
                    Props will replace if it is set.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>onSuccess</code></td>
                <td>Function <span class="grey">(response)</span></td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#events')">@success</a> event.
                  </p>
                  <p>
                    <strong>
                      Note:
                    </strong>
                    <code>@success</code> do not replace this event. Both two are executed in this case.
                  </p>
                </td>
              </tr>
              <tr>
                <td><code>onError</code></td>
                <td>Function <span class="grey">(response)</span></td>
                <td>
                  <p>
                    Same as <a @click="scrollTo('#events')">@error</a> event.
                  </p>
                  <p>
                    <strong>
                      Note:
                    </strong>
                    <code>@error</code> do not replace this event. Both two are executed in this case.
                  </p>
                </td>
              </tr>
              </tbody>
            </table>

          </div>

        </fieldset>

      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @import "../scss/VueApiRequestDemo";
</style>

<script>
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
  import codes from '../codes/VueApiRequestDemo/index'
  import example from '../examples/VueApiRequestDemo'

  import { TweenLite } from 'gsap'
  import 'gsap/ScrollToPlugin'

  export default {
    head: {
      title: {
        inner: 'Vue API Request'
      }
    },

    data () {
      return {
        example,
        showExamples: true
      }
    },

    computed: {
      code () {
        return codes
      }
    },

    methods: {
      js (code) {
        return Prism.highlight(code, Prism.languages.javascript)
      },
      html (code) {
        return Prism.highlight(code, Prism.languages.html)
      },
      scrollTo (query) {
        TweenLite.to(window, 1, {scrollTo: query})
      },
      resetExamples () {
        this.showExamples = false

        this.example.triggerExample.response = {}
        this.example.triggerExample.offset = 0

        this.$nextTick(() => { this.showExamples = true })
      }
    }
  }
</script>
