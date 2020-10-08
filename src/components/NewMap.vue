<template>
    <div>
        <input type="number" v-model="data" v-on:keyup.enter="fncheck()" placeholder="Latitude"><hr>
        <button v-on:click="fncheck()">Click</button>
         <div id="map"></div>
    </div>
</template>
<script>

import GoogleMapsLoader from 'google-maps'
export default {
    name:"NewMap",
    data(){
        return{
          map:null,
          latlng:null,
          marker:null,
        coordinates:{
            lat:10,
            lng:10
        }
          
      }            
    },
     mounted(){
            GoogleMapsLoader.load(function(google){
                
                this.map=new google.maps.Map(document.getElementById('map'),{
                    zoom: 15,
                    center: this.coordinates

                })

            });
      
    },
   


}
</script>