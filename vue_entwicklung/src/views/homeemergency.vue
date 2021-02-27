<template>
  <div id="homeemergency">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div id="homeemergency_menu_div">
        <i class="fa fa-bars" style="size: 12x;"></i>
    </div>

    <div id="homeemergency_pic_div1">
        <img id="homeemergency_pic1" v-if="!this.warnings_activated" src="../assets/homeemergency_pic1.png" alt="placehold">
        <img id="homeemergency_pic1" v-if="this.warnings_activated" src="../assets/homeemergency_pic3.png" alt="placehold">
    </div>

    <div id="homeemergency_t1">
        <h1 style="color: black" v-if="!this.warnings_activated">Get there safe & quick</h1>
        <h1 style="color: #BE152A" v-if="this.warnings_activated">Drive safe! We'll help.</h1>
    </div>

    <div id="homeemergency_pic_div2">
        <div style="width: 100%;">
            <img v-if="!this.warnings_activated" @click="send_warning()" id="homeuser_pic2" src="../assets/homeemergency_pic2.png" alt="placehold">
            <img v-if="this.warnings_activated" @click="deactivate()" id="homeuser_pic2" src="../assets/homeuser_pic3.png" alt="placehold">
        </div>
    </div>

    <div id="homeemergency_t2">
        <p v-if="!this.warnings_activated">Start sending warnings on your route.</p>
        <p style="color: #163CFF" v-if="this.warnings_activated">Listening for ER warnings on your route...</p>
    </div>

    <div id="a_warnings_div1">
        <div id="a_warnings_div2">
            <input type="checkbox">
            <p style="margin-top: 0%; margin-left: 5%;">Navigation connected</p>
        </div>
    </div>

    <div id="homeemergency_t3">
        <p @click="$router.push('rtwinfo1')">Why is RTW helpful</p>
    </div>


  </div>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default {
  name: 'App',
  components: {
  },

  data(){
      return {
          warnings_activated: false,
      };
  },


  methods: {


      send_warning() {
          this.warnings_activated = true;
          this.$socket.emit('get-message', 'Warnung empfangen');
      },


      deactivate() {

          Swal.fire({
                title: 'Stop ER warnings?',
                text: "ER warnings won't be sent any longer.",
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

    #homeemergency{
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #homeemergency_menu_div{
        width: 10%;
        height: 5%;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }

    #homeemergency_pic_div1{
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #homeemergency_pic1{
        width: 100%;
    }

    #homeemergency_t1{
        height: 20%;
        color: #163CFF;
    }

    #homeemergency_pic2_div{
        height: 10%;
    }

    #homeemergency_pic2{
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

    #homeemergency_t2{
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

    #homeemergency_t3{
        color: gray;
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
    }

</style>