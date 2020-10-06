<template>
  <div id="app" class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="row">
      <div class="col-4">
       
      </div>

      <div class="col-8">
        <Map/>
      </div>
    </div>
      
  </div>
</template>

<script>

import Map from './components/Map.vue'
export default {
  name: 'App',
  components: {
     Map
  }
}
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
