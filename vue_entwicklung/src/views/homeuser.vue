<template>
  <div id="homeuser">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div id="homeuser_menu_div">
        <i class="fa fa-bars" style="size: 12x;"></i>
    </div>

    <div id="homeuser_pic_div1">
        <img id="homeuser_pic1" v-if="!this.warnings_activated" src="../assets/homeuser_pic1.png" alt="placehold">
        <img id="homeuser_pic1" v-if="this.warnings_activated" src="../assets/homeuser_pic4.png" alt="placehold">
    </div>

    <div id="homeuser_t1">
        <h1 v-if="!this.warnings_activated">Stay safe on the road.</h1>
        <h1 v-if="this.warnings_activated">Drive safe! We'll help.</h1>
    </div>

    <div id="homeuser_pic_div2">
        <div style="width: 100%;">
            <img v-if="!this.warnings_activated" @click="warnings_activated=true" id="homeuser_pic2" src="../assets/homeuser_pic2.png" alt="placehold">
            <img v-if="this.warnings_activated" @click="deactivate()" id="homeuser_pic2" src="../assets/homeuser_pic3.png" alt="placehold">
        </div>
    </div>

    <div id="homeuser_t2">
        <p v-if="!this.warnings_activated">Start listening for Warnings!</p>
        <p style="color: #163CFF" v-if="this.warnings_activated">Listening for ER warnings on your route...</p>
    </div>

    <div id="a_warnings_div1">
        <div id="a_warnings_div2">
            <toggle-button/>
            <p style="margin-top: 0%; margin-left: 5%;">Recognize when I'm driving</p>
            <i class="fa fa-info-circle" style="margin-left: 3%;" @click="rec_info()"></i>
        </div>
    </div>

    <div id="homeuser_t3">
        <p @click="$router.push('rtwinfo1')">Why is RTW helpful</p>
    </div>


  </div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
  name: 'App',
  components: {
      ToggleButton,
  },

  data(){
      return {
          warnings_activated: false,
      };
  },


    sockets: {
        customEmit: function (data) {

            if (this.warnings_activated) {
                var aussage = new SpeechSynthesisUtterance(data);
                aussage.lang = 'en-US';
                window.speechSynthesis.speak(aussage);

                this.$fire({
                    title: "Achtung!",
                    text: data,
                    type: "warning",
                    timer: 20000
                });
            }
        }
    },


  methods: {

      rec_info() {
            this.$fire({
                    title: "Info",
                    text: "RTW can recognize when you are on a road by using your precise location utilizing 5G networks for tracking. Enable this to automatically start listening for warnings when driving is recognized.",
                    type: "info",
                    timer: 20000
            });
      },

      deactivate() {

          Swal.fire({
                title: 'Stop ER warnings?',
                text: "ER warnings won't appear any longer.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#163CFF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
                }).then((result) => {
                if (result.isConfirmed) {
                    this.warnings_activated=false;
                }
            })
      }

  },
}
</script>

<style>

    #homeuser{
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #homeuser_menu_div{
        width: 10%;
        height: 5%;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }

    #homeuser_pic_div1{
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #homeuser_pic1{
        width: 100%;
    }

    #homeuser_t1{
        height: 20%;
        color: #163CFF;
    }

    #homeuser_pic2_div{
        height: 10%;
    }

    #homeuser_pic2{
        width: 20%;
    }

    .rund {
        width: 10%;
        height: 20%;
        margin-left: 1%;
        margin-top: 1%;
        margin-bottom: 1%;
        border-radius: 200px;
        -moz-border-radius: 200px;
        -webkit-border-radius: 200px
    }

    #homeuser_t2{
        height: 5%;
    }

    #a_warnings_div1{
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    #a_warnings_div2{
        display: flex;
        flex-direction: row;
        justify-content:center;
    }

    #homeuser_t3{
        color: gray;
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
    }

</style>