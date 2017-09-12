<template>
  <div class="cross-domain-callback text-left">
    <h3>Origem: </h3>
    <pre>{{origin}}</pre>

    <h3>Dados recebidos: </h3>
    <pre>{{data}}</pre>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        origin: null,
        data: null
      }
    },
    mounted () {
      window.onmessage = e => {
        if (e.origin !== document.location.origin) {
          this.origin = e.origin
          this.data = e.data
        }
      }
    }
  }
</script>
