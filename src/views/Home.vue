<template id="home-template">
  <div id="home">

      <b-navbar toggleable="lg" type="dark" class="pm-nav">
    <b-navbar-brand><router-link class="pm-white-link " to="/" ><img src="@/assets/logo.svg" class="d-inline-block" alt="Pilli Logo" width="60px" height="60px"/> <b class="pm-white-text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="500">PILLI</b></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item ><router-link class="pm-white-link " to="/" >PILLI MIDIA</router-link></b-nav-item>
        <b-nav-item ><router-link class="pm-white-link " to="/sobre" >SOBRE</router-link></b-nav-item>
        <b-nav-item href="https://youtube.com/andrepilli" target="_blank"><v-icon inverse name="brands/youtube" /></b-nav-item>
        <b-nav-item href="https://twitter.com/andre_pilli" target="_blank"><v-icon inverse name="brands/twitter" /></b-nav-item>
        <b-nav-item href="https://instagram.com/andre_pilli" target="_blank"><v-icon inverse name="brands/instagram" /></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


  <b-container class="home-header pm-para" fluid="">
    <b-container class="sp-hk-sm"></b-container>
    <b-row align-h="center">
      <b-col>
        <h1 class="display-res-1 wordWrap"><p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">CRIATIVIDADE <span data-aos="fade-up" data-aos-duration="950" data-aos-delay="750">+ PROPÓSITO</span></p></h1><br />
      </b-col>
    </b-row>
    <b-row align-h="end">
      <b-col>
      </b-col>
      <b-col cols="6">
        <b-nav-item class="text-center" style="list-style: none;" href="https://www.youtube.com/watch?v=HReDLY2a1dg" target="_blank"><span class="pm-white-link"><v-icon name="play-circle"/> COM PRESSA? <a>VEJA NOSSO RESUMO EM VÍDEO</a>.</span></b-nav-item>
      </b-col>
      <b-col>
      </b-col>
    </b-row>
  </b-container>
 
  <!-- sp hk -->
<b-container id="about" class="sp-hk"></b-container>
<b-container>
  <b-row>
    <b-col cols="7">
      <img data-aos="zoom-in" data-aos-duration="600" src="@/assets/pilli-about.jpg" width="850px" height="850px" class="img-fluid"/>
    </b-col>
    <b-col>
    <h1 class="text-left" data-aos="fade" data-aos-duration="800"><b class="display-4 bold">UMA PRODUTORA</b> <p><b class="display-4 bold">DE INFLUÊNCIA</b></p></h1><br />
      <p data-aos="fade" data-aos-duration="800"><b>Andre Pilli</b> estudou mídia e entretenimento em
Stanford e na New York University. Ano passado
ganhou o My Rode Reel, o maior campeonato
de curta-metragens online do mundo,
sem equipe nenhuma. É o único influenciador e o
mais jovem embaixador da Sony Alpha no Brasil.</p>
<p data-aos="fade" data-aos-duration="800">Em agosto de 2016 Andre criou a <b>Pilli Mídia</b>, produtora que tem como principal marca a qualidade audiovisual de seus mais de 500 vídeos, que totalizam
quase 30 milhões de visualizações. O nascimento
da produtora foi motivado pela sua capacidade de
atender um crescente desafio do mercado: produzir conteúdo de qualidade numa linguagem que
transmita eficientemente as mensagens das marcas para as novas gerações.</p>
    </b-col>
  </b-row>
</b-container>
<!-- sp hk -->
<b-container class="sp-hk"></b-container>

<b-container class="client-box" fluid="">

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link to="/amazonprime" >
<video class="v1" loop muted id="video1" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/amazonprime.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="top-right display-res bold pm-white-text wordWrap">AMAZONPRIME VIDEO</div>
     </router-link>
  </b-col>
 

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link" to="/camaro" >
<video class="v2" loop muted id="video2" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/camaro.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">CAMARO</div>
    </router-link>
  </b-col>
</b-row>

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link class="text-link" to="/cruze" >
<video class="v3"  loop muted id="video3" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/cruze.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">CRUZE</div>
    </router-link>
  </b-col>

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link" to="/dji" >
  <video  loop muted class="v4"  id="video4" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/dji.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">DJI</div>
    </router-link>
  </b-col>
</b-row>

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link class="text-link" to="/intel" >
<video class="v5"  loop muted id="video5" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/intel.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">INTEL</div>
    </router-link>
  </b-col>

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link" to="/jaguar" >
 <video class="v6"  loop muted id="video6" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/jaguar.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">JAGUAR</div>
    </router-link>
  </b-col>
</b-row>

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link class="text-link" to="/landrover" >
<video class="v7" loop muted id="video7" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/landrover.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt1 display-res bold pm-white-text wordWrap">LAND ROVER</div>
    </router-link>
  </b-col>

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link" to="/leroymerlin" >
<video class="v8" loop muted id="video8" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/leroymerlin.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt1 display-res bold pm-white-text wordWrap">LEROY MERLIN</div>
    </router-link>
  </b-col>
</b-row>

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link class="text-link" to="/onix" >
<video class="v9" loop muted id="video9" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/onix.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">ONIX</div>
    </router-link>
  </b-col>

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link" to="/sony" >
<video class="v10" loop muted id="video10" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/sony.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">SONY</div>
    </router-link>
  </b-col>
</b-row>

<b-row>
  <b-col class="txt-img" align-self="start">
    <router-link class="text-link" to="/volkswagen" >
<video class="v11" loop muted id="video11" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/volkswagen.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt1 display-res bold pm-white-text">VOLKSWAGEN</div>
    </router-link>
  </b-col>

  <b-col class="txt-img" align-self="end">
    <router-link class="text-link"  to="/volvo" >
<video class="v12" loop muted id="video12" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/volvo.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
    <div id="textOnImg" class="centeredTxt display-res bold pm-white-text">VOLVO</div>
    </router-link>
  </b-col>
</b-row>

</b-container>

  </div>
</template>

<script>
export default {
name: 'home',

}
</script>

<style>


</style>
