<template>
  <div id="rtwinfo1">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <div id="appbar">
        <div id="appbar2">
            <img id="arrow_back" @click="$router.push('homeuser')" src="../assets/arrow_back.png" alt="placehold">
            <h1 id="appbar_text">How does this help?</h1>
            <img id="arrow_back">
        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
}

#appbar2{
    height:50%;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
}

#arrow_back{
    height: 60%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 2%;
}

#appbar_text{
    margin-top: auto;
    margin-bottom: auto;
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