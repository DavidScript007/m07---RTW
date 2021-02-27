<template>
  <div id="startscreen">
    
    <div id="appname_div">
        <h1>RTW</h1>
    </div>

    <div id="start_pic"></div>

    <div id="start_buttons_div">
        <button class="start_buttons" id="start_b1" @click="$router.push('/homeuser')">GET STARTED</button>
        <button class="start_buttons" id="start_b2" @click="$router.push('/')">IM A EMERGENCY SERVICE</button>
    </div>


  </div>
</template>

<script>

export default {
  name: 'startscreen',
  components: {

  }
}
</script>

<style>

#startscreen{
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#appname_div{
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#start_pic{
    height: 50%;
    background-color: blue;
}

#start_buttons_div{
    height: 35%;
    display: flex;
    flex-direction: column;;
}

.start_buttons{
    width: 80%;
    align-self: center;
}

#start_b1{
    margin-top: 20%;
}

#start_b2{
    margin-top: 5%;
}

</style>
