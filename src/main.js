import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps';




Vue.config.productionTip = false
Vue.use(VueGeolocation)


Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyAf9mwc-FqKONtCae9zD4b4LTL1DmR0l-E'
  },
 
})


new Vue({  
  render: h => h(App),
}).$mount('#app')


