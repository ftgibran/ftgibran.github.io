<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  $icon-font-path: "./assets/fonts/";
  $brand-primary: #FC6094;
  $brand-success: #5cb85c;
  $brand-info: #374853;
  $brand-warning: #f0ad4e;
  $brand-danger: #d9534f;
  @import "../node_modules/bootstrap-sass/assets/stylesheets/bootstrap";
  @import url('https://fonts.googleapis.com/css?family=Aldrich');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .v-api-logo {
    font-size: 32px;
    font-family: "Aldrich", sans-serif;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
</style>
