<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  methods: {
    send_warning() {
      this.$socket.emit('get-message', 'Warnung empfangen!');
    }
  }
}
</script>

<style>
#app {
  
}
</style>
