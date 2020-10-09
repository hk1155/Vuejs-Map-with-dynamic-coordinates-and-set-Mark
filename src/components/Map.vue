<template>
  <div>
    <h4>Map is set according to this coordinates</h4>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longtitude</p>
    <hr/>
    <h4 v-if="showcust">Custom Coordinates</h4>
    <p>{{this.cust.clat}} Latitude, {{this.cust.clng}} Longtitude</p><hr>
    <input
      type="number"
      v-model="cust.clat"
      placeholder="latitude"
      class="form-control"
    />
    <input
      type="number"
      v-model="cust.clng"
      placeholder="longtitude"
      class="form-control"
    /><br/>
    <button v-on:click="getData(data)" class="btn btn-primary">
      Set New Data
    </button>
    <p style="color: red" v-if="showerr">{{ errmsg }}</p>

    <hr />
    <!-- <button @click="addMarker">Add Mark</button> -->
    <button v-on:click="addMarker" v-if="addshow" class="btn btn-success">
      Add Mark
    </button>
    <button v-on:click="removeMark" v-if="show" class="btn btn-danger">
      Remove Mark
    </button>
    <hr />
    <GmapMap
      :center="coordinates"
      :zoom="7"
      map-type-id="terrain"
      style="width: 800px; height: 400px"
      ref="mapRef"
    >
      <gmap-marker
        :key="index"
        :zoom="10"
        :center="coordinates"
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
      errmsg: null,
      showcust:false,
      show: false,
      showerr: false,
      addshow: true,
     
      markers: [],
      // currentPlace: null,

      coordinates: {
        lat: null,
        lng: null,
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
    //     .then(coordinates =>{

    //         this.coordinates=coordinates;
    //     })
    //     .catch(error=>alert(error))
    if(this.cust.lat!=null && this.cust.lng!=null)
    {
      
      this.coordinates.lat=20;
      this.coordinates.lng=20;
    }
    else{
      this.coordinates.lat =12;
      this.coordinates.lng = 15;
    }
     
  },
  methods: {
    addMarker() {
     
     if(this.coordinates.lat==null || this.coordinates.lng==null)
      {
        this.showerr=true
        this.errmsg="Coordinates not Found"
      }
      else
      {
        this.show = true;
        this.addshow = false;
        const marker = {
        lat: this.coordinates.lat,
        lng: this.coordinates.lng,
      };
      this.markers.push({ position: marker });
      this.places.push(this.coordinates);
      this.center = marker;
      this.currentPlace = null;
      }
     
    },
    removeMark() {
      this.markers = [];
      this.show = false;
      this.addshow = true;
    },

    getData() {
      
      if (this.cust.clat == null || this.cust.clng == null) {
        this.showerr = true;
        this.errmsg = "Please fill the data";
      } else {
        this.show=false
        this.addshow=true
        this.showcust=true
        this.showerr=false
        this.coordinates.lat = this.cust.clat;
        this.coordinates.lng = this.cust.clng;
      }
      //alert(this.coordinates.lat)
    },
  },
};
</script>