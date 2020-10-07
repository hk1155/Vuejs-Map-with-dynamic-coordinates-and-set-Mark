<template>
  <div>
    <h4>Map is set according to this coordinates</h4>
    <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longtitude</p>
    <hr />
    <!-- <h4>Custom Coordinates</h4>
        <p>{{dclat}} Latitude, {{dclat}} Longtitude</p><hr> -->
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
    /><br />
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
      :id="mymap"
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
      show: false,
      showerr: false,
      addshow: true,
      dclat: null,
      dclng: null,
      markers: [],
      currentPlace: null,

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
    //it finds the current location

    // this.$getLocation({})
    //     .then(coordinates =>{

    //         this.coordinates=coordinates;
    //     })
    //     .catch(error=>alert(error));

     this.coordinates.lat = 10;
     this.coordinates.lng = 10;
  },
  methods: {
    addMarker() {
      this.show = true;
      this.addshow = false;

      if(this.coordinates.lat==null || this.coordinates.lng==null)
      {
        this.showerr=true
        this.errmsg="Coordinates not Found"
      }
      else
      {
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
      // this.dclat=this.cust.clat
      // this.dclng=this.cust.clng

      if (this.cust.clat == null || this.cust.clng == null) {
        this.showerr = true;
        this.errmsg = "Please fill the data";
      } else {
        this.showerr=false
        this.coordinates.lat = this.cust.clat;
        this.coordinates.lng = this.cust.clng;
      }
      //alert(this.coordinates.lat)
    },
  },
};
</script>