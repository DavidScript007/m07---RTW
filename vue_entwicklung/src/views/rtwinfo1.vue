<template>
  <div id="rtwinfo1">
    
    <div id="appbar">
        <h1>How does this help?</h1>
    </div>

    <div id="info1_pic">
        <img id="rtwinfo1_pic" src="../assets/rtwinfo1_pic.png" alt="placehold">
    </div>

    <div id="info1_text">
        <p>
            The timely arrival of emergency services often makes the difference between life and death.

            Especially in busy cities, a siren behind you results in stress and hectic, dangerous dodging
            maneuvers. This costs precious time that could save lives.

            The improvements in latency and location tracking that the 5G network offers allow us to give
            you an audititve warning ahead of time, and only when its really necessary - so you have
            more time to clear the way or choose an alternative route.

            When infrastructure, jurisdiction and technology are ready, 5G will enable car to car
            communication to tackle such problems. Until then, our app offers a way to already utilize
            the power of 5G.
        </p>
    </div>

    <div id="info1_button_div">
        <button id="info1_button" @click="$router.push('rtwinfo2')">LEARN MORE</button>
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

#rtwinfo1{
    height:100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#appbar{
    height: 10%;
    background-color: #8ABCF2;
    color: white;
}

#info1_pic{
    height: 30%;
}

#rtwinfo1_pic{
    width: 100%;
}

#info1_text{
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#info1_button_div{
    height: 10%;
}

#info1_button{
    background-color:  #8ABCF2;
    color: white;
    border: none;
    padding: 3%;
    text-decoration: none;
    border-radius: 6px;
}

</style>