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
      // {
      //   address: "Under the Ivy - 13 Lambert Lane",
      //   lat: 40.3658048, lng: -74.9468706,
      //   lineup: [
      //     {
      //       artist: "Loose Panic",
      //       link: "http://localhost:8080/artists/loose-panic/",
      //       description: "Music project of Jarret Crawford that covers Americana and roots rock, 90s alternative, and more.",
      //       timeslot: "12pm",
      //     },
      //     {
      //       artist: "Rachel Rosemarie",
      //       link: "http://localhost:8080/artists/rachel-rosemarie/",
      //       description: "Eerily beautiful melodies, treading like a golden carp in a sea of existential dread.",
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "Lasso Kelly",
      //       link: "http://localhost:8080/artists/lasso-kelly/",
      //       description: "This experimental country trio is going to chew you up n spit you out like molasses soaked tobacco.",
      //       timeslot: "2pm",
      //     },
      //   ],
      // },
      // {
      //   address: "15 Klines Court",
      //   lat: 40.3654266, lng: -74.945317,
      //   lineup: [
      //     {
      //       artist: "Sam Ryan",
      //       link: "https://lambertvilleporchfest.com/artists/sam-ryan/",
      //       description: "A voice of silk croons hits for every occassion.",
      //       timeslot: "12pm",
      //     },
      //     {
      //       artist: "Tod the Mod",
      //       link: "https://lambertvilleporchfest.com/artists/todd-ellis/",
      //       description: "The mod, the myth, the legend.",
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "Those Looks - Canceled!",
      //       link: "https://lambertvilleporchfest.com/artists/those-looks/",
      //       description: 'Velvet wave indie pop from the wilds of New Jersey.',
      //       timeslot: "2pm",
      //     },
      //     {
      //       artist: "Keith Kenny",
      //       link: "https://lambertvilleporchfest.com/artists/essie-and-keith-kenny/",
      //       description: 'Kenny has shared the stage with the likes of Keller Williams, Leon Russell, John Hammond Jr., New Riders of the Purple Sage, and more. Nuff said.',
      //       timeslot: "3pm",
      //     },
      //     {
      //       artist: "Bill and Fred's Excellent Adventure",
      //       link: "https://lambertvilleporchfest.com/artists/bill-doe/",
      //       description: 'Local faves playing classic covers... think Pink Floyd, Grateful Dead, Bob Dylan, Simon & Garfunkle, Bowie, Willie Nelson, and Zappa. They have also been described as a comedy act.',
      //       timeslot: "4-6pm",
      //     },
      //   ],
      // },
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
      // {
      //   address: "Porch-o-lonis - 148 North Union Street",
      //   lat: 40.3718376, lng: -74.9468862,
      //   lineup: [
      //     {
      //       artist: "Kevin Toft and the Alternators",
      //       link: "https://lambertvilleporchfest.com/artists/kevin-toft-and-the-alternators/",
      //       description: 'Original & Rebuilt Genuine Jersey Dope Art Rock Blues & Soul',
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "RIPS",
      //       link: "https://lambertvilleporchfest.com/artists/jazz-house-kids/",
      //       description: "Bold yet melodic noises mixing elements of country, soul, punk.",
      //       timeslot: "2pm",
      //     },
      //     {
      //       artist: "Tinsel Town Rebellion",
      //       link: "https://lambertvilleporchfest.com/artists/tinsel-town-rebellion/",
      //       description: "Tinsel Town Rebellion formed in 2020 as an ad hoc group to bring the music from the silver screen LIVE to your eardrums.",
      //       timeslot: "3pm",
      //     },
      //     {
      //       artist: "Rock Hall",
      //       link: "https://lambertvilleporchfest.com/artists/rock-hall/",
      //       description: "For over 25 years, Rock Hall has been filling all your garage rock, classic rock, and 90s alternative needs.",
      //       timeslot: "4pm",
      //     }
      //   ],
      // },
      // {
      //   address: "1 Washington Street",
      //   lat: 40.36896, lng: -74.94164,
      //   lineup: [
      //     {
      //       artist: "The Cold Soil Boys",
      //       link: "https://lambertvilleporchfest.com/artists/the-cold-soil-boys/",
      //       description: 'Mystery band.',
      //       timeslot: "3pm",
      //     },
      //   ],
      // },
      // {
      //   address: "111 North Union Street",
      //   lat: 40.37006, lng: 	-74.94631,
      //   lineup: [
      //     {
      //       artist: "River Riders",
      //       link: "https://lambertvilleporchfest.com/artists/river-riders/",
      //       description: 'soulful harmonies with a unique instrumental spin on country, bluegrass, blues, and swing music.',
      //       timeslot: "12pm",
      //     },
      //     {
      //       artist: "Grace Carey",
      //       link: "https://lambertvilleporchfest.com/artists/grace-carey/",
      //       description: '',
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "Little Flowers",
      //       link: "https://lambertvilleporchfest.com/artists/little-flowers/",
      //       description: 'Bedroom folk dream duo playing originals with heady lyrics.',
      //       timeslot: "2pm",
      //     },
      //   ],
      // },
      // {
      //   address: "103 South Main Street",
      //   lat: 40.36261, lng: -74.94241,
      //   lineup: [
      //     {
      //       artist: "Pat Foran",
      //       link: "https://lambertvilleporchfest.com/artists/patrick-foran/",
      //       description: 'Familiar but different Berklee-trained songwriter.',
      //       timeslot: "12pm",
      //     },
      //     {
      //       artist: "Kevin Hilferty",
      //       link: "https://lambertvilleporchfest.com/artists/kevin-hilferty/",
      //       description: "",
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "Nick Clemons",
      //       link: "https://lambertvilleporchfest.com/artists/nick-clemons/",
      //       description: '',
      //       timeslot: "3pm",
      //     },
      //     {
      //       artist: "Pat Foran",
      //       link: "https://lambertvilleporchfest.com/artists/patrick-foran/",
      //       description: 'Familiar but different Berklee-trained songwriter.',
      //       timeslot: "5pm",
      //     },
      //   ],
      // },
      // {
      //   address: "Thai Tida Parking Lot Stage - 236 North Union Street",
      //   lat: 40.37463, lng: -74.94759,
      //   lineup: [
      //     {
      //       artist: "Shyboyz",
      //       link: "https://lambertvilleporchfest.com/artists/shyboyz/",
      //       description: 'A band of boys who like to wear lots of wigs and diapers on stage.',
      //       timeslot: "2pm",
      //     },
      //     {
      //       artist: "DJ Rad",
      //       link: "https://lambertvilleporchfest.com/artists/dj-rad/",
      //       description: 'Afterparty DJ warming up with some fun danceables.',
      //       timeslot: "3pm",
      //     },
      //     {
      //       artist: "Mimosa Watusi",
      //       link: "https://lambertvilleporchfest.com/artists/mimosa-watusi/",
      //       description: 'Graces punk, pop rock, and alternative dance in a manner that is both pleasurable and nostalgic.',
      //       timeslot: "4pm",
      //     },
      //   ],
      // },
      // {
      //   address: "Bank of Princeton - 10 Bridge Street",
      //   lat: 40.36545, lng: -74.94617,
      //   lineup: [
      //     {
      //       artist: "Jeff & Karen",
      //       link: "https://lambertvilleporchfest.com/artists/jeff-karen/",
      //       description: 'Acoustic duo-songs of 60s, 70s,and beyond + original tunes.',
      //       timeslot: "2pm-4pm",
      //     },
      //   ],
      // },
      // {
      //   address: "Roy's Garage - 20 Delevan Street",
      //   lat: 40.36921, lng: -74.946196,
      //   lineup: [
      //     {
      //       artist: "Chris Chadwick",
      //       link: "https://lambertvilleporchfest.com/artists/chris-chadwick/",
      //       description: "Acoustic blue-eyed soul with roots in the Greenwich Village folk scene.",
      //       timeslot: "12-2pm",
      //     },
      //     {
      //       artist: "Peter Sandler",
      //       link: "https://lambertvilleporchfest.com/artists/peter-sandler/",
      //       description: "Inspired songwriting on a nylon string.",
      //       timeslot: "2pm-4pm",
      //     },
      //     {
      //       artist: "The Shackers",
      //       link: "https://lambertvilleporchfest.com/artists/the-shackers/",
      //       description: 'Groovy originals and classic covers, these guys know how to have a good time!',
      //       timeslot: "4pm-6pm",
      //     },
      //   ],
      // },
      // {
      //   address: "25 Ferry Street",
      //   lat: 40.364983, lng: -74.944373,
      //   lineup: [
      //     {
      //       artist: "Daniella Fischetti & Tim Ryan",
      //       link: "https://lambertvilleporchfest.com/artists/daniella-fischetti-tim-ryan/",
      //       description: "Young folks playing old-time bluegrass and fiddle tunes with flair and panache.",
      //       timeslot: "1pm",
      //     },
      //   ],
      // },
      // {
      //   address: "17 Clinton Street",
      //   lat: 40.368642, lng: -74.946805,
      //   lineup: [
      //     {
      //       artist: "LAURIE VOSBURG",
      //       link: "https://lambertvilleporchfest.com/artists/laurie-vosburg/",
      //       description: 'A mix of originals and country rocking blues',
      //       timeslot: "1pm",
      //     },
      //   ],
      // },
      // {
      //   address: "49 North Union Street",
      //   lat: 40.367478, lng: -74.945626,
      //   lineup: [
      //     {
      //       artist: "The Entertainment Corporation",
      //       link: "https://lambertvilleporchfest.com/artists/the-entertainment-corporation/",
      //       description: "80's New Wave acoustic shreddery!",
      //       timeslot: "3pm",
      //     },
      //   ],
      // },
      // {
      //   address: "Lambertville Elks Open Mic - 66 Wilson Street",
      //   lat: 40.362058, lng: -74.942853,
      //   lineup: [
      //     {
      //       artist: "Porchfest Open Mic",
      //       description: "Enjoy food, drink, and lots of the day's acts all in one place. Sign-ups at 6!",
      //       timeslot: "6pm-10pm",
      //     },
      //   ],
      // },
      // {
      //   address: "Soupçon Salon Community Center (Hibernia Firehouse)",
      //   lat: 40.3647, lng: -74.94251,
      //   lineup: [
      //     {
      //       artist: "JavaSway",
      //       link: "https://lambertvilleporchfest.com/artists/jeff-f-david-allison/",
      //       description: 'JavaSway swings an eclectic genre of romantic American and French jazz-style music',
      //       timeslot: "1pm",
      //     },
      //     {
      //       artist: "Drama Cycle",
      //       link: "https://lambertvilleporchfest.com/artists/drama-cycle/",
      //       description: "Chasing the perfect blend between the unconventional and modestly accessible musical approaches.",
      //       timeslot: "2pm",
      //     },
      //     {
      //       artist: "Hot Dodge",
      //       link: "https://lambertvilleporchfest.com/artists/hot-dodge/",
      //       description: "Amusing and irreverent storyteller and acoustic-synth-folk-singer songwriter.",
      //       timeslot: "3pm",
      //     },
      //     {
      //       artist: "Calla Bere and The Attitude",
      //       link: "https://lambertvilleporchfest.com/artists/calla-bere-and-the-attitude/",
      //       description: "New Hope-based and rock ‘n’ soul-raised, roots rock group. Think Joss Stone, Janis, and the like.",
      //       timeslot: "4pm",
      //     },
      //     {
      //       artist: "DJs: DJ Rad (Fun/Groovy House), Shaw Civitarese (Booty-shaking House)",
      //       description: "City-wide after party for those who like to dance.",
      //       timeslot: "5pm-8pm",
      //     },
      //   ],
      // },
      // {
      //   address: "63 Clinton Street",
      //   lat: 40.3701383, lng: -74.9472286,
      //   lineup: [
      //     {
      //       artist: "CIDY",
      //       link: "https://lambertvilleporchfest.com/artists/cidy/",
      //       description: 'Singer-songwriter, Cidy makes music instead of dealing with their issues.',
      //       timeslot: "2pm",
      //     },
      //   ],
      // },
      // {
      //   address: "28 Coryell Street",
      //   lat: 40.367508, lng: -74.945269,
      //   lineup: [
      //     {
      //       artist: "Decibel and the Boom",
      //       link: "https://lambertvilleporchfest.com/artists/decibel-and-the-boom/",
      //       description: 'New Original Rock',
      //       timeslot: "5pm",
      //     },
      //   ],
      // },

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
