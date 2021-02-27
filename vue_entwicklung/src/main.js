import VueSocketIO from 'vue-socket.io';
import IO from 'socket.io-client';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(new VueSocketIO({ connection: IO('http://localhost:5000') }));

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
