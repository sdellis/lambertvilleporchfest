<template>
  <Layout>
    <H1>Porch Map</H1>
    <!-- <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Merchandise pre-order is closed! Taking new orders at Ely Park on Oct 2nd.👕</a></p> -->
    <p><strong>Click or touch a red pin/marker to see the porch line-up.</strong></p>
    <p>Rest rooms are available at in the parking lot next to <a href="http://maps.google.com/maps?q=12+Union+Street,+Lambertville,+NJ+08530">
12 N. Union Street</a>, <a href="https://www.google.com/maps/place/Phillip+L.+Pittore+Justice+Center/@40.3646202,-74.9467619,17z/data=!3m1!4b1!4m5!3m4!1s0x89c3ff49de6e1487:0x3d4bfe5867e8bcff!8m2!3d40.3646219!4d-74.9445443">The Justice Center (ACME building)</a>, and <a href="http://maps.google.com/maps?q=3+Station+Ct,+Lambertville,+NJ+08530">
3 Station Ct</a>, or by patronizing one of our local restaurants. Porch hosts are not obligated to provide rest rooms.</p>
    <GmapMap
      ref="mymap" :center="startLocation" :zoom="16" style="width: 100%; height: 800px"
    >
    <GmapInfoWindow :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
      <h2>{{infoContent}}</h2>
      <p v-for="(item, key) in lineup" :key="key">
        <strong>
          <a v-if="lineup[key].link" :href="lineup[key].link">{{lineup[key].artist}}</a>
          <span v-else>{{lineup[key].artist}}</span>
        </strong></br>
        {{lineup[key].description}}<br/>
        <em>{{lineup[key].timeslot}}</em>
      </p>
    </GmapInfoWindow>

    <GmapMarker v-for="(item, key) in coordinates" :key="key" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, key)" />
    </GmapMap>
  </Layout>
</template>
<page-query>
query {
  porches: allPorches {
    edges {
      node {
        title
        image
        message
        host
        street_name
        house_number
        lat
        long
        email
        path
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Map / Schedule'
  },
  data() {
    return {
    startLocation: {
      lat: 40.3701383,
      lng: -74.9472286
    },
    coordinates: [
      {
        address: 'Corner of Chaos - 5 York Street',
        lat: '40.3680643',
        lng: '-74.9461641',
        lineup: [
          {
            artist: "Jimmy Velour",
            link: "https://lambertvilleporchfest.com/artists/jimmy-velour",
            description: "Tears for Fears meets Tame Impala. A crooner in sunglasses ﻿wearing the softest things on this planet.",
            timeslot: "12pm",
          },
          {
            artist: "yupanki",
            link: "https://lambertvilleporchfest.com/artists/yupanki",
            description: "Ambient Art Rock",
            timeslot: "1pm",
          },
          {
            artist: "Slow Noche",
            link: "https://lambertvilleporchfest.com/artists/slow-noche/",
            description: "Chris Buccari's original nylon string guitar instrumentals with hints of Latin, Island, Folk and Noir.",
            timeslot: "2pm",
          },
          {
            artist: "Slow Noche",
            link: "https://lambertvilleporchfest.com/artists/slow-noche/",
            description: "Chris Buccari's original nylon string guitar instrumentals with hints of Latin, Island, Folk and Noir.",
            timeslot: "3pm",
          },
          {
            artist: "lu and lusso",
            link: "https://lambertvilleporchfest.com/artists/lu-and-lusso",
            description: "Garage jazz. Flamenco grunge. Tango punk. Bossa Baroque. Django vibes.",
            timeslot: "4pm",
          },
          {
            artist: "The Local 12",
            link: "https://lambertvilleporchfest.com/artists/the-local-12",
            description: "Rockers from South Jersey!",
            timeslot: "5pm",
          }
        ]
      },
      {
        address: '72 Delaware',
        lat: '40.371487',
        lng: '-74.944647',
        lineup: [
          {
            artist: "The Earthworks Band",
            link: "https://lambertvilleporchfest.com/artists/the-earthworks-band/",
            description: "Band with 5 guitarists plays covers from the 70’s and 80’s.",
            timeslot: "2pm-4pm",
          }
        ],
      },
      {
        address: "Baked by the River - 8 Church Street",
        lat: 40.3669047131796, lng: -74.944845261897,
        lineup: [
          {
            artist: "Christina Ward",
            link: "https://lambertvilleporchfest.com/artists/christina-ward/",
            description: "Ethereal mermaid. Shreds guitar.",
            timeslot: "1pm",
          },
          {
            artist: "Nawi Avila",
            link: "https://lambertvilleporchfest.com/artists/christina-ward/",
            description: "Weird cool amazing performance art music.",
            timeslot: "1:30pm",
          },
          {
            artist: "Rachel Rosemarie",
            link: "https://lambertvilleporchfest.com/artists/rachel-rosemarie/",
            description: "Eerily beautiful melodies, treading like a golden carp in a sea of existential dread.",
            timeslot: "2pm",
          },
          {
            artist: "Lasso Kelly",
            link: "https://lambertvilleporchfest.com/artists/lasso-kelly/",
            description: "This experimental country trio is going to chew you up n spit you out like molasses soaked tobacco.",
            timeslot: "3pm",
          },
          {
            artist: "Valona",
            link: "https://lambertvilleporchfest.com/artists/valona/",
            description: "Smooth hip hop and new soul.",
            timeslot: "4pm",
          }
        ],
      },
      {
        address: "15 Klines Court",
        lat: 40.3654266, lng: -74.945317,
        lineup: [
          {
            artist: "milk",
            link: "https://lambertvilleporchfest.com/artists/milk/",
            description: "Original songs and a helping of classic 90's covers.",
            timeslot: "1pm",
          },
          {
            artist: "Christina Ward (full band)",
            link: "https://lambertvilleporchfest.com/artists/christina-ward/",
            description: "Ethereal mermaid. Shreds guitar. With FULL BAND!",
            timeslot: "3pm",
          },
          {
            artist: "Reeder Station",
            link: "https://lambertvilleporchfest.com/artists/reeder-station/",
            description: 'Power trio featuring former Buzzcocks bassist Steve Garvey, guitarist and singer James Seward, and drummer Brad Smith.',
            timeslot: "3pm",
          },
          {
            artist: "Sam Ryan",
            link: "https://lambertvilleporchfest.com/artists/sam-ryan/",
            description: "A voice of silk croons hits for every occassion.",
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "Intergalactic Picnic - 138 N. Union Street",
        lat: 40.37166744430551, lng: -74.9465289608412,
        lineup: [
          {
            artist: "Rubix Pube",
            link: "https://www.instagram.com/rubixpubepa",
            description: "Theatrical, kooky, multi-genre show for those who dare to listen!",
            timeslot: "3pm",
          },
          {
            artist: "Hollow Howl",
            link: "https://hollowhowl.bandcamp.com/",
            description: 'Dark and evocative rock n roll soaked in reverb & rhythm.',
            timeslot: "4pm",
          },
          {
            artist: "Scorpion Tea",
            link: "https://scorpiontea.bandcamp.com/",
            description: 'Experimental death rock project. A band of monsters playing broken instruments.',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "87 Coryell Street",
        lat: 40.367845112038054, lng: -74.94261234718233,
        lineup: [
          {
            artist: "Ed and Tina Wall",
            link: "https://lambertvilleporchfest.com/artists/ed-wall/",
            description: 'Renowned keyboardist and vocalist for the J.b. Kline band.',
            timeslot: "12-3pm",
          }
        ],
      },
      {
        address: "3 Jefferson Street",
        lat: 40.36977030518065, lng: -74.94672574532933,
        lineup: [
          {
            artist: "Tres",
            link: "https://lambertvilleporchfest.com/artists/tres/",
            description: 'Acoustic Folk music by Jennifer Griffith, Gina Scialla, and Angie Mikula.',
            timeslot: "12pm",
          },
        ],
      },
      {
        address: "56 Buttonwood Street",
        lat: 40.37339327093613, lng: -74.94537002998483,
        lineup: [
          {
            artist: "Sweet Pith",
            link: "https://lambertvilleporchfest.com/artists/sweet-pith/",
            description: 'Free music.',
            timeslot: "12-12:30pm",
          },
          {
            artist: "Relief",
            link: "https://lambertvilleporchfest.com/artists/sweet-pith/",
            description: 'Synth Explorations',
            timeslot: "12:45-1:15pm",
          },
          {
            artist: "West Jersey Airport",
            link: "https://lambertvilleporchfest.com/artists/west-jersey-airport/",
            description: 'Bedroom folk dream duo playing originals with heady lyrics.',
            timeslot: "1:15-2pm",
          },
          {
            artist: "[Exhibit A]",
            link: "https://lambertvilleporchfest.com/artists/exhibit-a/",
            description: 'Local No Wave.',
            timeslot: "2:15pm",
          },
        ],
      },
      {
        address: "54 Buttonwood Street",
        lat: 40.373396165602074, lng: -74.94549217416551,
        lineup: [
          {
            artist: "Cari & Corky",
            link: "https://lambertvilleporchfest.com/artists/cari-corky/",
            description: 'A singer-songwriter romance from your porch hosts.',
            timeslot: "3pm",
          },
          {
            artist: "hot glue & the gun",
            link: "https://lambertvilleporchfest.com/artists/hot-glue-the-gun/",
            description: "Based out of New York City, Hot Glue & the Gun craft intimate, interactive, theater-rock.",
            timeslot: "1pm",
          },
          {
            artist: "The Hive",
            link: "https://lambertvilleporchfest.com/artists/the-hive/",
            description: 'An all out early 2000’s/90’s punk and indie rock extravaganza!',
            timeslot: "3pm",
          }
        ],
      },
      {
        address: "Union Coffee - 49 North Union Street",
        lat: 40.36767388232255, lng: -74.94560416196308,
        lineup: [
          {
            artist: "Rowan Hara",
            link: "https://lambertvilleporchfest.com/artists/rowan-hara/",
            description: 'Incredibly beautiful words, vocals, and guitar. A must-see-act of Porchfest.',
            timeslot: "1-2pm",
          },
          {
            artist: "The Entertainment Corporation",
            link: "https://lambertvilleporchfest.com/artists/the-entertainment-corporation/",
            description: '80s New Wave acoustic shreddery!',
            timeslot: "2-4pm",
          }
        ],
      },
      {
        address: "Visionary Woman Tarot - 52 North Union Street",
        lat: 40.36778813779378, lng: -74.94535306067404,
        lineup: [
          {
            artist: "Charybdis",
            link: "https://lambertvilleporchfest.com/artists/charybdis/",
            description: 'A﻿coustic metal by Jason Caridi.',
            timeslot: "12pm-1pm",
          },
          {
            artist: "Kristine Gorman Tarot Readings",
            link: "https://lambertvilleporchfest.com/artists/charybdis/",
            description: 'Inspired Tarot readings from our local visionary.',
            timeslot: "1pm-6pm",
          },
        ],
      },
      {
        address: "Roy's Garage - 20 Delevan Street",
        lat: 40.36921, lng: -74.946196,
        lineup: [
          {
            artist: "NIGHT CAP",
            link: "https://lambertvilleporchfest.com/artists/night-cap/",
            description: "Classic, indie and alternative rock, with blues, funk and a touch of jazz for good measure. Originals and covers.",
            timeslot: "2-4pm",
          }
        ],
      },
      {
        address: "111 North Union Street",
        lat: 40.37017403068964, lng: -74.94655110429005,
        lineup: [
          {
            artist: "The Swiss Guard",
            link: "https://lambertvilleporchfest.com/artists/the-swiss-guard/",
            description: "Loud music for quiet people.",
            timeslot: "4-6pm",
          },
        ],
      },
      {
        address: "16 Clinton Street",
        lat: 40.368642, lng: -74.946805,
        lineup: [
          {
            artist: "The Street Friars",
            link: "https://lambertvilleporchfest.com/artists/the-street-friars/",
            description: 'C﻿lassic cover songs!',
            timeslot: "2-4pm",
          },
        ],
      },
      {
        address: "103 North Union Street",
        lat: 40.36965207955858, lng: -74.94633898765719,
        lineup: [
          {
            artist: "Greg Pontier and Nancy Neff",
            link: "https://lambertvilleporchfest.com/artists/greg-pontier/",
            description: "Guitar, accordion, and ukelele covers of 60's through the 80's singer/songwriters.",
            timeslot: "12-2pm",
          },
        ],
      },
      {
        address: "Lambertville Elks Open Mic - 66 Wilson Street",
        lat: 40.362058, lng: -74.942853,
        lineup: [
          {
            artist: "Porchfest Open Mic",
            description: "Enjoy food, drink, and lots of the day's acts all in one place. Sign-ups at 6!",
            timeslot: "6pm-10pm",
          },
        ],
      },
      {
        address: "16 Clinton Street",
        lat: 40.368806907897266, lng: -74.94643030429043,
        lineup: [
          {
            artist: "The Street Friars",
            link: "https://lambertvilleporchfest.com/artists/the-street-friars/",
            description: 'C﻿lassic cover songs!',
            timeslot: "2-4pm",
          }
        ],
      },
      {
        address: "The Fest on the Hill - 278 Holcolme Way",
        lat: 40.379671119053995, lng: -74.94529941649293,
        lineup: [
          {
            artist: "The Fog",
            link: "https://lambertvilleporchfest.com/artists/the-fog/",
            description: 'Classy rock covers from classic to current.',
            timeslot: "4-6pm",
          },
        ],
      },
      {
        address: "30 Coryell Street",
        lat: 40.367508, lng: -74.945269,
        lineup: [
          {
            artist: "Acoustic Kelly and Friends",
            link: "https://lambertvilleporchfest.com/artists/acoustic-kelly/",
            description: 'A mix of classic rock, country and originals. Block party, bring a lawn chair!',
            timeslot: "2-4pm",
          },
        ],
      },
      {
        address: "Public Rest Rooms",
        lat: 40.363860, lng: -74.945650,
        lineup: [
          {
            artist: "Accessible via Lambertville Station or the Tow Path",
            description: '',
            timeslot: "",
          },
        ],
      },
    ],
    infoPosition: null,
    infoContent: null,
    lineup: [],
    infoOpened: false,
    infoCurrentKey: null,
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35
      }
    },
  }
},
methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.address;
      this.lineup = marker.lineup;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    }
  }
}
</script>

<style scoped>
 .travel-map {
   height: 800px;
 }
</style>
