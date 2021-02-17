<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyAbmC9SwpxYMmmN8iZztZO_FOZmgK95TiQ"
  >
  // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
        @click="alert('foo')"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data() {
    return {
      markers: [
        {
          id: "5_York",
          position: { lat: 40.3680643, lng: -74.9461641 }
        },
        {
          id: "13_Lambert",
          position: { lat: 40.3658048, lng: -74.9468706 }
        },
        {
          id: "37_Perry",
          position: { lat: 40.3719588, lng: -74.9458192 }
        },
        {
          id: "63_Clinton",
          position: { lat: 40.3701383, lng: -74.9472286 }
        },
        {
          id: "163_NorthUnion",
          position: { lat: 40.3721668, lng: -74.9471219 }
        },
        {
          id: "40_Perry",
          position: { lat: 40.3721268, lng: -74.9458424 }
        },
        {
          id: "60_Elm",
          position: { lat: 40.3740313, lng: -74.9460624 }
        },
        {
          id: "57_Buttonwood",
          position: { lat: 40.372940, lng: -74.945220 }
        },
        {
          id: "22_South_Union",
          position: { lat: 40.3646971, lng: -74.944364 }
        },
        {
          id: "7_North_Main",
          position: { lat: 40.3668222, lng: -74.9431814 }
        },
        {
          id: "138_Union_Street",
          position: { lat: 40.371372, lng: -74.9466219 }
        },
        {
          id: "15_Klines_Court",
          position: { lat: 40.3654266, lng: -74.945317 }
        },
        {
          id: "48_Coryell",
          position: { lat: 40.367611, lng: -74.9442911 }
        },
        {
          id: "28_Coryell",
          position: { lat: 40.367337, lng: -74.945545  }
        },
        {
          id: "37_Clinton",
          position: { lat: 40.369310, lng: -74.947090  }
        },
      ],
      lines: [
        // {
        //   id: "1",
        //   path: [{ lat: 3, lng: 101 }, { lat: 5, lng: 99 }]
        // },
        // {
        //   id: "2",
        //   path: [{ lat: 5, lng: 99 }, { lat: 6, lng: 97 }]
        // }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      console.log(this.markers[0])
      return this.markers[0].position;
    }
  },
  methods: {
    displayPorch: function (event) {
      console.log(event)
    },
  },
};
</script>
