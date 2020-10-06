<template>
  <div>
    <h4>Map is set according to this coordinates</h4>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longtitude</p>
    <hr/>
    <!-- <h4>Custom Coordinates</h4>
        <p>{{dclat}} Latitude, {{dclat}} Longtitude</p><hr> -->
    <input type="number" v-model="cust.clat" placeholder="latitude" />
    <input type="number" v-model="cust.clng" placeholder="longtitude" />
    <button v-on:click="getData(data)">Click</button>
    
    <hr />
    <!-- <button @click="addMarker">Add Mark</button> -->
    <button v-on:click="addMarker" >Add Mark</button>
    <button v-on:click="removeMark" v-if="show">Remove Mark</button><hr>
    <GmapMap
      :id="mymap"
      :center="coordinates"
      :zoom="7"
      map-type-id="terrain"
      style="width: 800px; height: 400px"
      ref="mapRef"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      show:false,
      dclat: null,
      dclng: null,
      markers: [],
    
      currentPlace: null,

      coordinates: {
        lat: 0,
        lng: 0,
      },
      cust: {
        clat: null,
        clng: null,
      },
    };
  },
  mounted() {

    // it finds the current location 
    // this.$getLocation({})
    // .then(coordinates =>{
    //     this.coordinates=coordinates;
    // })
    // .catch(error=>alert(error));
    this.coordinates.lat = 10;
    this.coordinates.lng = 10;

    //this.$refs.mapRef.$mapPromise.then(map=>this.map=map);
  },
  methods: {
    addMarker() {
      this.show=true
      const marker = {
        //lat: this.currentPlace.geometry.location.lat(),
        //lng: this.currentPlace.geometry.location.lng()
        lat: this.coordinates.lat,
        lng: this.coordinates.lng
        
        // lar:this.cust.clat,
        // lng:this.cust.clng
      };
      this.markers.push({ position: marker });
      this.places.push(this.coordinates);
      this.center = marker;
      this.currentPlace = null;
    },
    // geolocate: function () {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //   });
    // },
    
    getData() {
      //this.dclat=this.cust.clat
      //this.dclng=this.cust.clng      
      this.coordinates.lat = this.cust.clat;
      this.coordinates.lng = this.cust.clng;
      //alert(this.coordinates.lat)
    },
  },
};
</script>