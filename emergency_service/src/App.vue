<template>
  <div id="app">
    <button class="start_buttons" id="start_b1" @click="send_warning()">SEND A WARNING</button>
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
