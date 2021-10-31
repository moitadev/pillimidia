<template id="camaro-template">
    <div id="camaro">

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
        <h1 class="display-res-1"><p class="pm-white-text">CAMARO.</p></h1><br />
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
      <h3><b>CHEVROLET CAMARO</b></h3><br />
      <b>CLIENTE</b><br />
        <p>CHEVROLET</p>
        <b>TIME</b><br />
        <b>Diretor</b> – Andre Pilli<br />
        <b>Direção de Fotografia</b> – Camilo Santa Helena<br />
        <b>Assistente de Câmera</b> – Cristiano Machado<br />
        <b>Roteiro</b> – Paula Perego<br />
        <b>Produtor</b> – Guilherme Fróes<br />
        <b>Assistente de Produção</b> – Thomas Gromik<br />
        <b>Som</b> – Felipe Sabino<br />
        <b>Edição e finalização</b> – Andre Pilli<br />
        <b>Assistente de Edição</b> – Camilo Santa Helena <br />
        <p><b>Câmera B</b> – Leonardo Armelin</p>
        <b>EQUIPAMENTO</b><br />
        <b>Câmeras</b> – Sony 7RII, Sony 7SII e GoPro Hero 7<br />
        <b>Pacote de Lentes</b> – Sigma e Sony<br />
        <b>Drone</b> – DJI Phantom 4<br />
        <p><b>Estabilizador</b> – Zhiyun</p>
    </b-col>
    <b-col align-self="end">
    <h1 class="text-left"><b>O PROJETO,</b></h1><br />
      <p>Criação de conteúdo no YouTube para divulgar o Camaro.</p>
      <p><br /></p>
      <p><br /></p>
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
    src="https://www.youtube.com/embed/kxkj7rEgN5Q?rel=0"
    allowfullscreen /></b-container>
    <br />

<b-container class="vd-wrapper">
  <b-embed
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/HvW9vrWRxy0?rel=0"
    allowfullscreen /></b-container>
<br />

</section>


<section class="background-cover">
  <video loop muted class="cover-img v2" id="video2" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/camaro.mp4" type="video/mp4">
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
    <router-link to="/cruze" class="text-decoration-none" ><h1 class="display-res-1 text-center"><b class="pm-white-link">CRUZE</b></h1></router-link><br />
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
