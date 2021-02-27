<template>
  <div id="rtwinfo2">
    
    <div id="appbar">
        <div id="appbar2">
            <img id="arrow_back" @click="$router.push('rtwinfo1')" src="../assets/arrow_back.png" alt="placehold">
            <h1 id="appbar_text">How does this help?</h1>
            <img id="arrow_back">
        </div>
    </div>

    <div id="info2_pic">
        <img id="rtwinfo1_pic" src="../assets/rtwinfo2_pic.png" alt="placehold">
    </div>

    <div id="info2_text">
        <h2 style="padding-top: 3%;">Identification of ambulance vehicles for emergency rescue</h2>
        <p>
            With growing population density in cities, finding ways to make cities safe and sustainable is key. 
69% of traffic accidents happen in urban areas. To enable safer mobility for all people on the road, our mission is to use 5G technology as the enabler for real-time, focused warnings when you are on the road.
The 5G network allows for very precise position tracking and its low latency means we can use it for time-sensitive things where previous technology was just too slow.
Emergency service vehicles are 17 times as likely to be involved in an accident. That is 1700%. That’s why its important to keep everyone on the road safer, while making sure that ER gets to their destination as fast and as uninterrupted as possible. 30 seconds could literally mean the differencebetween life and death when it comes to the arrival of ER.
In an ideal world, our shared autonomous cars are interconnected with each other and with infrastructure and automatically make room when an ER vehicle ison their route. Since its gonna be a couple years until we see that happening,we can already use the benefits of 5G to make urban mobility safer and potentiallysave lives.
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