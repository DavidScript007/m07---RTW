<template>
  <div id="homeuser">

      <div id="homeuser_pic"></div>

    <div id="start_pic"></div>

    <div id="start_buttons_div">
        <button class="start_buttons" id="start_b1" @click="$router.push('homeuser')">GET STARTED</button>
        <button class="start_buttons" id="start_b2" @click="$router.push('/')">IM A EMERGENCY SERVICE</button>
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
    }

</style>