<template>
  <div id="rtwinfo2">
    
    <div id="appbar">
        <h1>How does this help?</h1>
    </div>

    <div id="info2_pic">
        <img id="rtwinfo1_pic" src="../assets/rtwinfo1_pic.png" alt="placehold">
    </div>

    <div id="info2_text">
        <p>
            With growing population density in cities, finding ways to make cities safe and sustainable
            is key.

            69% of traffic accidents happen in urban areas. To enable safer mobility for all people
            on the road, our mission is to use 5G technology as the enabler for real-time focused w.
        </p>
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

#rtwinfo2{
    height:100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#appbar{
    height: 10%;
}

#info2_pic{
    height: 30%;
}

#info2_text{
    height: 60%;
}


</style>