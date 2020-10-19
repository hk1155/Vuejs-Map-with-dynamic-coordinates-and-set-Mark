<template>
  <div>
    <input
      type="number"
      @keypress="fncheck()"
      id="txtlat"
      name="txtlat"
      placeholder="Latitude"
    />
    <input
      type="number"
      @keypress="fncheck()"
      id="txtlng"
      name="txtlng"
      placeholder="Longitude"
    />
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "Newmap",
  data() {
    return {
      latlng: null,
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.latlng = new google.maps.LatLng(21, 72);
    this.map = new google.Map(document.getElementById("map"), {
      center: this.latlng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    this.marker = new google.maps.Marker({
      position: this.latlng,
      map: this.map,
      draggable: true,
    });
  },
  methods: {
    fncheck() {
      alert("ok");
    },
  },
};
</script>