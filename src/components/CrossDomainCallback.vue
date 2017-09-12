<template>
  <div class="cross-domain-callback">
    <div class="container text-left">
      <h4>Local do iFrame: </h4>
      <pre>{{local}}</pre>

      <h4>Origem dos dados: </h4>
      <pre>{{origin}}</pre>

      <h4>Dados recebidos: </h4>
      <pre>{{data}}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        local: null,
        origin: null,
        data: null
      }
    },
    mounted () {
      this.local = document.location.origin
      window.onmessage = e => {
        if (e.origin !== document.location.origin) {
          this.origin = e.origin
          this.data = e.data
        }
      }
    }
  }
</script>
