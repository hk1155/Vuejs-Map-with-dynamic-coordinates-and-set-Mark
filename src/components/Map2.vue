<template>
  <div>
    <input
      type="number"
      v-model="txtlat"
      placeholder="Latitude"
      class="form-control"
      
    />
   
    <input
      type="number"
      v-model="txtlng"
      class="form-control"
      placeholder="Longitude"
      
    /><br />
    <button @click="addmarker()" class="btn btn-primary" v-if="showadd">
      Add Mark
    </button>
    <button @click="removemark()" class="btn btn-danger" v-if="showremove">
      Remove Mark
    </button>
    <p style="color: red" v-if="errmsg">{{ errmsg }}</p>
    <hr />
    <gmap-map
      ref="mymap"
      :center=startLocation
      :zoom="2"
      style="width: 800px; height: 500px"
    >
          
      <gmap-marker
        v-for="(item, key) in coordinates"
        :key="key"
        :position="getPosition(item)"
        :clickable="true"
        
        @click="toggleInfo(item, key)"
      />
    </gmap-map>
    <hr />
  </div>
</template>

<script>

export default {
  name: "Map2",
 
  data() {
    return {
      errmsg: false,
      showadd: true,
      showremove: false,
      txtlat: null,
      txtlng: null,

      startLocation: {
        
        lat: null,
        lng: null,
      
      },
      coordinates: [
        //set the mark coordinates
        {
          
          lat: Number,
          lng: Number,
        },
      ],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,

      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  mounted() {
    this.$getLocation({})
      .then((coordinates) => {
        this.startLocation = coordinates;
      })
      .catch((error) => alert(error));

  },
  methods: {
    getPosition: function (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },   
    // toggleInfo: function (marker, key) {
    //   this.infoPosition = this.getPosition(marker);
    //   this.infoContent = marker.full_name;
    //   if (this.infoCurrentKey == key) {
    //     this.infoOpened = !this.infoOpened;
    //   } else {
    //     this.infoOpened = true;
    //     this.infoCurrentKey = key;
    //   }
    // },
    addmarker: function () {

      if (this.txtlat != null && this.txtlng != null) {
        this.errmsg = false;
        this.coordinates.push({
          lat: this.txtlat,
          lng: this.txtlng,
        });

        this.startLocation.lat = this.txtlat;
        this.startLocation.lng = this.txtlng;
        this.showadd = false;
        this.showremove = true;
      } else {
        this.errmsg = true;
        this.errmsg = "Please select the Coordinates";
      }
    },
    removemark: function () {
      this.showadd = true;
      this.showremove = false;
      this.coordinates.pop({
        lat: null,
        lng: null,
      });
    },
  },
};
</script>