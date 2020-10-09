<template>
  <div>
    
    <input type="number" v-model="txtlat" placeholder="Latitude" />
    <input type="number" v-on:keypress.enter="addmarker()" v-model="txtlng" placeholder="Longitude" />
    <button @click="addmarker()" v-if="showadd">Add Mark</button>
    <button @click="removemark()" v-if="showremove">Remove Mark</button>

    <p style="color: red" v-if="errmsg">{{ errmsg }}</p>
    <hr />
    <gmap-map
      ref="mymap"
      :center="startLocation"
      :zoom="5"
      style="width: 100%; height: 300px"
    >
      <gmap-marker
        v-for="(item, key) in coordinates"
        :key="key"
        :zoom="5"
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
      txtlng:null,

      startLocation: {
        //this display the simple map where started
        // lat: 9.436911823156148,
        // lng: 8.382812499999996
        lat: 10,
        lng: 10,
      },
      coordinates: [
        //set the mark coordinates
        {
          lat: null,
          lng: null,
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
      
      if (this.txtlat != null || this.txtlng != null) {
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