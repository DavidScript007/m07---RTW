<template>
  <div id="homeuser">

    <div id="homeuser_pic"></div>

    <div id="homeuser_t1">
        <h1>Stay safe on the road</h1>
    </div>

    <div id="homeuser_b1">
        <button class="rund" id="start_b1" @click="$router.push('homeuser')">
            <span>&#8593;</span>
        </button>
    </div>

    <div id="homeuser_t2">
        <p>Keep me posted!</p>
    </div>

    <div id="a_warnings">
        <input type="checkbox" id="toggle_button">
        <p style="margin-top: 0%; margin-left: 5%;">Enable automatic warnings</p>
    </div>

    <div id="homeuser_t3">
        <p>Why is RTW helpful</p>
    </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
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

    #homeuser_pic{
        height: 20%;
        background-color: blue;
    }

    #homeuser_t1{
        height: 10%;
    }

    #homeuser_b1{
        height: 20%;
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
        height: 20%;
    }

    #a_warnings{
        height: 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #homeuser_t3{
        height: 20%;
    }

</style>