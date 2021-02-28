<template>
  <div id="app">
    <button @click="start_animation()">Animation starten</button>
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },

  data(){
      return {
      };
  },


  methods: {


    start_animation() {
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');

      var x_driver = 0;
      var x_hero = 0;
      var warned = 0;
      var x_driver_speed = 2;
      var y_driver = 78;


      draw_driver();

      function draw_driver() {

        ctx.beginPath();
        ctx.fillRect(x_driver, y_driver, 5, 3);
        ctx.stroke();

        if(x_driver > 80){
          ctx.beginPath();
          ctx.fillRect(x_hero, 78, 5, 3);
          ctx.stroke();
        }

        setTimeout(function(){
          
          ctx.clearRect(0, 0, 500, 500);

          x_driver = x_driver + x_driver_speed;

          if(x_driver > 80){
            x_hero = x_hero+3;


            if(x_driver - x_hero < 30){
              x_driver_speed = 0;
            }

            else if(x_driver - x_hero < 50){
              if(warned == 0){
                send_warning();
                warned = 1;
              }
              x_driver_speed = 1;
              y_driver = y_driver + 0.5;
            }
          }

          draw_driver();

        }, 100);

        function send_warning() {
          const io = require("socket.io-client");
          const socket = io("http://192.168.0.26:5000");
          socket.emit("get-message", "Warnung empfangen!");
        }
      }
    },

  }
}
</script>

<style>
  #myCanvas {
    height: 100%; 
    width: 100%;
    background-image: url("./assets/background_map.png");
  }
</style>