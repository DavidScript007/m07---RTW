<template>
  <div id="app">
    <startscreen/>
  </div>
</template>

<script>
import startscreen from './views/startscreen.vue'

export default {
  name: 'App',
  components: {
    startscreen
  }
}
</script>

<style>

html,
body{
  padding: 0;
  margin: 0;
}

#app {
  height:100%;
}

</style>
