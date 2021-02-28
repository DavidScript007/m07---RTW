<template>
  <div id="app">
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


  sockets: {
    animation_activated: function (data) {
      console.log(data);
      this.start_animation();
    }
  },


  methods: {


    start_animation() {
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');

      var x_driver = 110;
      var x_hero = 0;
      var warned = 0;
      var x_driver_speed = 1;
      var y_driver = 78;
      var col_hero = 0;

      draw_driver();

      function draw_driver() {

        ctx.beginPath();
        ctx.fillRect(x_driver, y_driver, 5, 3);
        ctx.stroke();

        if(x_driver > 120){

          if(col_hero == 0){
            ctx.fillStyle = 'blue';
            col_hero = 1;
          }
          else{
            ctx.fillStyle = 'white';
            col_hero = 0;
          }
          ctx.beginPath();
          ctx.fillRect(x_hero, 78, 5, 3);
          ctx.stroke();

          ctx.fillStyle = 'black';
        }

        setTimeout(function(){
          
          ctx.clearRect(0, 0, 500, 500);

          x_driver = x_driver + x_driver_speed;

          if(x_driver > 120){
            x_hero = x_hero+1.8;


            if(x_driver - x_hero < 30){
              if(y_driver > 82){
                x_driver_speed = 0;
              }
              else{
                y_driver = y_driver + 0.5;
              }
            }

            else if(x_driver - x_hero < 150){
              if(warned == 0){
                send_warning();
                warned = 1;
              }
              x_driver_speed = 1;
            }
          }

          draw_driver();

        }, 100);

        function send_warning() {
          const io = require("socket.io-client");
          const socket = io("http://192.168.0.26:5000");
          socket.emit("get-message", "Warning! There is an Emergency Rescue on your way. It’ll be right next to your Location. Please be prepared to form a rescue lane.");
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