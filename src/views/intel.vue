<template id="intel-template">
    <div id="intel">

        <b-navbar class="pm-nav">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item ><router-link class="textw-link" to="/" >FECHAR</router-link></b-nav-item>

      </b-navbar-nav>
  </b-navbar>
<b-jumbotron class="jumbotron pm-para">
  <b-container>
    <b-row align-h="center">
      <b-col>
        <h1 class="display-res-1"><p class="pm-white-text">INTEL.</p></h1><br />
      </b-col>
    </b-row>
    <b-row align-h="end">
      <b-col align-self="start">
      </b-col>
      <b-col align-self="center">
      </b-col>
      <b-col align-self="end ">
      </b-col>
    </b-row>
  </b-container>
</b-jumbotron>

<!-- sp hk -->
<b-container class="sp-hk"></b-container>

<b-container >
  <b-row>
    <b-col align-self="start" class="text-right">
      <h3><b>ACER SWITCH ALPHA 12</b></h3><br />
      <b>CLIENTE</b><br />
        <p>Intel</p>
        <b>TIME</b><br />
        <b>Diretor</b> – Andre Pilli<br />
        <b>Assistente de Direção</b> – Camilo Santa Helena<br />
        <b>Produtor</b> – Guilherme Fróes<br />
        <b>Masterização e Mixagem</b> – Felipe Sabino<br />
        <p><b>Finalização</b> – Leonardo Armelin</p>
        <b>EQUIPAMENTOS</b><br />
        <b>Câmeras</b> – Sony 7RII, Sony 7SII e GoPro Hero 7<br />
        <b>Pacote de Lentes</b> – Sigma e Sony<br />
        <b>Drones</b> – DJI Mavick 2 Pro e Zoom<br />
        <p><b>Estabilizador</b> – Zhiyun</p>
    </b-col>
    <b-col align-self="end">
    <h1 class="text-left"><b>O PROJETO,</b></h1><br />
      <p>Review da linha de computadores Acer Switch Alpha 12.</p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
      <p><br /></p>
    </b-col>
  </b-row>
</b-container>

<!-- sp hk -->
<b-container class="sp-hk"></b-container>

<section class="videos-bl">
    <!-- sp hk -->
<b-container class="sp-hk"></b-container>

<b-container class="vd-wrapper">
    <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/wyO2vxFug_c?rel=0"
    allowfullscreen /></b-container>
<br />

<b-container class="vd-wrapper">
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/CERcfQMw7Go?rel=0"
    allowfullscreen /></b-container>
<br />

<b-container class="vd-wrapper">
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/MEqd3aG8pWE?rel=0"
    allowfullscreen /> </b-container>
<br />
</section>

<section class="background-cover">
  <video loop muted class="cover-img v5" id="video5" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/intel.mp4" type="video/mp4">
    Seu navegador não suporta vídeos em html5.
  </video>
</section>
<footer class="footer-pm">
<!-- sp hk -->

  <b-container class="lg-para"> 
    <b-container class="sp-hk"></b-container>
  <b-row align-h="start">
    <b-col align-self="center">
      <h4 class="text-center pm-white-text">PRÓXIMO</h4>
    </b-col>
  </b-row>
  <b-row align-h="end">
    <b-col align-self="center">
    <router-link to="/jaguar" class="text-decoration-none" ><h1 class="display-res-1 text-center"><b class="pm-white-link">JAGUAR</b></h1></router-link><br />
    </b-col>
  </b-row>
  <br />
</b-container>

</footer>
  </div>

</template>

<script>
export default {
    
}
</script>
