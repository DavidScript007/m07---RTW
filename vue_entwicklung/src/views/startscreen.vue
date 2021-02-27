<template>
  <div id="startscreen">
    
    <div id="appname_div">
        <h1 id="appname_text">RTW</h1>
    </div>

    <div id="start_pic_div">
        <img id="start_pic" src="../assets/startscreen_pic.png" alt="placehold">
    </div>

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
    color: #8ABCF2;
}

#appname_text{
    font-style: bold;
}

#start_pic_div{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;;
}

#start_pic{
    width: 100%;
}

#start_buttons_div{
    height: 35%;
    display: flex;
    flex-direction: column;
}

.start_buttons{
    width: 80%;
    align-self: center;
}

#start_b1{
    margin-top: 20%;
    background-color: #8ABCF2;
    border: none;
    text-decoration: none;
    border-radius: 6px;
    padding: 3%;
    color: white;
}

#start_b2{
    margin-top: 5%;
    border: none;
    text-decoration: none;
    padding: 3%;
    color: #F75353;
    background-color: white;
}

</style>
