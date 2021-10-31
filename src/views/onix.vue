<template id="onix-template">
    <div id="onix">

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
        <h1 class="display-res-1"><p class="pm-white-text">ONIX.</p></h1><br />
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
      <h3><b>CHEVROLET ONIX</b></h3><br />
      <b>CLIENTE</b><br />
        <p>Chevrolet</p>
        <b>TIME</b><br />
        <b>Diretor</b> – Andre Pilli<br />
        <b>Assistente de Direção</b> – Anna Luisa Mendes<br />
        <b>Diretor de Fotografia</b> – Victor Alencar <br />
        <b>Produtor</b> – Guilherme Fróes<br />
        <b>Operador de Câmera</b> – Leonardo Armelin<br />
        <b>Atendimento</b> – Thomas Gromik<br />
        <b>Assitente de produção </b> – Felipe Maluf <br />
        <b>Masterização e Mixagem</b> – Felipe Sabino<br />
        <b>Emilio Bonduki</b> – Figurino<br />
        <p><b>Finalização</b> – Leonardo Armelin</p>
        <b>EQUIPAMENTOS</b><br />
        <b>Câmera</b> – RED RAVEN<br />
        <b>Pacote de Lentes</b> – Sigma e Canon<br />
        <b>Equipamentos para Maquinária </b><br />
        <p><b>Kit de iluminação </b> – 2X Aputure 300d </p>

    </b-col>
    <b-col align-self="end">
    <h1 class="text-left"><b>O PROJETO,</b></h1><br />
      <p>Criação de vídeos para divulgar o Onix.</p>
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
  <video loop muted class="cover-img v9" id="video9" onmouseover="this.play()" onmouseout="this.pause()">
    <source src="../assets/onix.mp4" type="video/mp4">
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
    <router-link to="/sony" class="text-decoration-none" ><h1 class="display-res-1 text-center"><b class="pm-white-link">SONY</b></h1></router-link><br />
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
