<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- <router-link to="components/map2">Map2</router-link> -->

    <div class="row">

      <!-- <Map/> -->
      <!-- <Try/> -->
      <Map2/>
    </div>
  </div>
</template>
<script>
//import Map from "./components/Map.vue";
// import Try from "./components/Try.vue"
import Map2 from './components/Map2.vue'
export default {
  name: "App",
  components: {
    // Map,
    // Try,
    Map2    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
