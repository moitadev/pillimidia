<template>
  <div id="app">

  <transition enter-active-class="animated fadeIn" leave-active-class="blackToBlue" mode="out-in">
  <div key=1 v-if="loaded">
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
  <router-view></router-view>
  </transition>
  </div>

<div key=2 class="pageLoader" v-else>
  <div class="logoWrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><defs></defs>
        <g id="simbolo">
            <path class="cls-1" d="M1252.12,689.79v87.06l144.64-72v539.85l-479.7,238.74V1226.62l251.06-125.53V385.64l-650,325v715.45l229.86-114.93v-85.61l-144.69,
            72.35V758.62l480.87-240.44V773.41L831.89,898.94v260.85h0v173.27h0v281.3l647.25-322.12,2.79-1.39V575.42ZM917.06,943.61l167-83.14v197l-167,
            83.53Z"/>
        </g>
    </svg>
  </div>
</div>
</transition>

</div>

</template>

<script>
export default {
    data() {
        return {
            loaded: false
        }
    },
mounted(){ 
  setTimeout(
    _ => this.loaded = true, 
    3500 
  )
}   
}


</script>

<style>
@font-face {
    font-family: 'Ciutadella';
    src: url('./assets/Ciutadella-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Ciutadella';
    src: url('./assets/Ciutadella-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Ciutadella';
    src: url('./assets/Ciutadella-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

</style>
