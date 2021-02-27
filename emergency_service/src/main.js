import VueSocketIO from 'vue-socket.io';
import IO from 'socket.io-client';
import Vue from 'vue'
import App from './App.vue'

Vue.use(new VueSocketIO({ connection: IO('http://192.168.0.26:5000/') }));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
