<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="row">
      <!-- <Map /> -->
      <Map2/>
    </div>
  </div>
</template>

<script>
// import Map from "./components/Map.vue";
import Map2 from "./components/Map2.vue"
export default {
  name: "App",
  components: {
    // Map,
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
