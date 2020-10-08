<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="row">
      <Map/>
      <!-- <NewMap/> -->
      <!-- <Map2 :latitude= 13.7013266 :longitude= -89.226622 :title="'Location from Map'" /> -->
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
// import NewMap from './components/NewMap.vue'
// import Map2 from './components/Map2.vue'
export default {
  name: "App",
  components: {
    Map,
    // NewMap,
    // Map2
    
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
