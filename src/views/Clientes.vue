<template id="clientes">
  <div id="clientes">
      <b-navbar toggleable="lg" class="pm-nav">
    <b-navbar-brand><router-link class="pm-white-link " to="/" ><img src="@/assets/logo_.png" class="d-inline-block" alt="Pilli Logo" width="60px" height="60px"/> <b class="pm-white-text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="600">PILLI</b></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item ><router-link class="pm-white-link " to="/" >Pilli Midia</router-link></b-nav-item>
        <b-nav-item href="http://moita.tk/msales/"><span class="pm-white-link">Blog do Pilli</span></b-nav-item>
        <b-nav-item href="https://youtube.com/andrepilli" target="_blank"><v-icon inverse name="brands/youtube" /></b-nav-item>
        <b-nav-item href="https://twitter.com/andre_pilli" target="_blank"><v-icon inverse name="brands/twitter" /></b-nav-item>
        <b-nav-item href="https://instagram.com/andre_pilli" target="_blank"><v-icon inverse name="brands/instagram" /></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<b-jumbotron class="cl-para">
  <b-container>
    <b-row align-h="start">
      <b-col>
        <img src="@/assets/logo_.png" width="750px" height="750px" class="img-fluid"/>
      </b-col>
    </b-row>
    <b-row align-h="end">
      <b-col align-self="end">
        <h1 class="display-1"><p class="pm-white-text text-right">Clientes.</p></h1><br />
      </b-col>
    </b-row>
  </b-container>
</b-jumbotron>

<!-- sp hk -->
<b-container class="sp-hk"></b-container>

<b-container fluid class="p-4">
  <b-row>
    <b-col>
     <router-link to="/amazonprime"><img class="img-fluid" src="../assets/amazonprime.png" alt="Amazon Prime" /></router-link>
    </b-col>
    <b-col>
      <router-link to="/camaro"><img class="img-fluid" src="../assets/camaro.png" alt="Camaro" /></router-link>
    </b-col>
    <b-col>
      <router-link to="/cruze"><img class="img-fluid" src="../assets/cruze.png" alt="Cruze" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/dji"><img class="img-fluid" src="../assets/dji.png" alt="Dji" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/intel"><img class="img-fluid" src="../assets/intel.png" alt="Intel" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/jaguar"><img class="img-fluid" src="../assets/jaguar.png" alt="Jaguar" /></router-link>
    </b-col>
  </b-row>
  <br />
    <b-row>
    <b-col>
      <router-link to="/landrover"><img class="img-fluid" src="../assets/landrover.png" alt="Land Rover" /></router-link>
    </b-col>
    <b-col>
      <router-link to="/leroymerlin"><img class="img-fluid" src="../assets/leroymerlin.png" alt="Leroy Merlin" /></router-link>
    </b-col>
    <b-col>
      <router-link to="/onix"><img class="img-fluid" src="../assets/onix.png" alt="Onix" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/sony"><img class="img-fluid" src="../assets/sony.png" alt="Sony" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/volkswagen"><img class="img-fluid" src="../assets/volkswagen.png" alt="Volkswagen" /></router-link>
    </b-col>
      <b-col>
      <router-link to="/volvo"><img class="img-fluid" src="../assets/volvo.png" alt="Volvo" /></router-link>
    </b-col>
  </b-row>
</b-container>

  <!-- sp hk -->
<b-container class="sp-hk"></b-container>


  </div>
</template>

<script>
export default {

}
</script>

<style>


</style>
