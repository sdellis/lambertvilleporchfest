<template>
  <Layout>
    <Header>Porch Map</Header>
    <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Merchandise pre-order is closed! Taking new orders at Ely Park on Oct 2nd.👕</a></p>
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
        address: '5 York Street',
        lat: '40.3680643',
        lng: '-74.9461641',
        lineup: [
          {
            artist: "Dave Iannucci's Acoustic Love Shack",
            link: "https://lambertvilleporchfest.com/artists/dave-iannuccis-acoustic-love-shack/",
            description: "Song-a-day phenomenon keeps the tunes flowing.",
            timeslot: "12pm",
          },
          {
            artist: "Crystal Bears Verb Dear",
            link: "https://lambertvilleporchfest.com/artists/crystal-bears-verb-deer/",
            description: "Poetic musings sink into experimental soundscapes.",
            timeslot: "1pm",
          },
          {
            artist: "Those Looks",
            link: "https://lambertvilleporchfest.com/artists/crystal-bears-verb-deer/",
            description: "Slo jams from the wilds of New Jersey",
            timeslot: "2pm",
          },
          {
            artist: "Christina Ward",
            link: "https://lambertvilleporchfest.com/artists/those-looks/",
            description: "Enchanting and unique alt-folk",
            timeslot: "2pm",
          },
          {
            artist: "Chris Buccari",
            link: "https://lambertvilleporchfest.com/artists/chris-buccari/",
            description: "Classical guitar originals",
            timeslot: "3pm",
          },
          {
            artist: "Your Kids",
            link: "https://lambertvilleporchfest.com/artists/crystal-bears-verb-deer/",
            description: "Art school electro-punk with Brooklyn vibes",
            timeslot: "3pm",
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
            timeslot: "12pm-2pm",
          },
          {
            artist: "The Godzilla Blues Band",
            link: "https://lambertvilleporchfest.com/artists/the-godzilla-blues-band/",
            description: "Original rocking tunes by accomplished guitarist, Mike Smull.",
            timeslot: "3pm-5pm",
          }
        ],
      },
      {
        address: "13 Lambert Lane",
        lat: 40.3658048, lng: -74.9468706,
        lineup: [
          {
            artist: "Rachel Rosemarie",
            link: "https://rachelrosemarie.bandcamp.com/album/growing-plants-inside",
            description: "Eerily beautiful melodies, treading like a golden carp in a sea of existential dread.",
            timeslot: "12pm",
          },
          {
            artist: "Alyssa Zajac",
            link: "https://www.youtube.com/user/lyssy42197/videos",
            description: "Playful and whimsical musings of a human bean, with baritone ukulele",
            timeslot: "1pm",
          },
          {
            artist: "Chris Sailor",
            link: "http://localhost:8080/artists/chris-sailor/",
            description: "Original folk stuff.",
            timeslot: "2pm",
          },
        ],
      },
      {
        address: "42 York Street",
        lat: 40.368797, lng: -74.944487,
        lineup: [
          {
            artist: "Lisa and Erica Moran and Chris Deakin",
            link: "https://lambertvilleporchfest.com/artists/lisa-and-erica-moran-and-chris-deakin/",
            description: 'Singer songwriter ensemble performs uplifting originals.',
            timeslot: "1pm",
          },
          {
            artist: "Jazz House Kids",
            link: "https://lambertvilleporchfest.com/artists/jazz-house-kids/",
            description: "ONE OF THE MOST SUCCESSFUL AND RESPECTED JAZZ EDUCATION PROGRAMS IN THE COUNTRY COMES TO LAMBERTVILLE.",
            timeslot: "2pm",
          },
          {
            artist: "Sayonne",
            link: "https://lambertvilleporchfest.com/artists/sayonne/",
            description: "Innovative, edgy, classic, fashion forward pop/R&B with an extraordinary stage presence that will leave you thirsting for more.",
            timeslot: "3pm",
          },
          {
            artist: "Kate Baker and Jim Johnson",
            link: "https://lambertvilleporchfest.com/artists/kate-baker-and-jim-johnson/",
            description: "",
            timeslot: "4pm",
          },
          {
            artist: "Darius De Haas",
            link: "https://lambertvilleporchfest.com/artists/darius-de-haas/",
            description: "An award winning actor and singer with 'deeps roots in jazz and soul'. - NYTimes",
            timeslot: "5pm",
          }
        ],
      },
      {
        address: "7 North Main Street",
        lat: 40.366546, lng: -74.943231,
        lineup: [
          {
            artist: "NJNO - Not Just Nickelharpa Orchestra",
            link: "https://lambertvilleporchfest.com/artists/njno-not-just-nyckelharpa-orchestra/",
            description: 'An amazing ensemble of unique instruments led by your local nyckelharpists at The Birdhouse Center for the Arts.',
            timeslot: "3pm",
          },
        ],
      },
      {
        address: "61 Clinton Street",
        lat: 40.37017, lng: -74.947341,
        lineup: [
          {
            artist: "Little Flowers",
            link: "https://lambertvilleporchfest.com/artists/little-flowers/",
            description: 'Bedroom folk dream duo playing originals with heady lyrics.',
            timeslot: "2pm",
          },
        ],
      },
      {
        address: "6 Lilly Street",
        lat: 40.365701, lng: -74.942295,
        lineup: [
          {
            artist: "Proboscis",
            link: "https://lambertvilleporchfest.com/artists/proboscis/",
            description: 'All their songs are about insects. Heavy, heavy insects.',
            timeslot: "2pm-4pm",
          },
          {
            artist: "Wack Weeds",
            link: "https://lambertvilleporchfest.com/artists/wack-weeds/",
            description: "Fuzzed-out garage and spaced-out shoegaze sounds.",
            timeslot: "4pm",
          },
          {
            artist: "Bon Temp Tucker",
            link: "https://lambertvilleporchfest.com/artists/bon-temp-tucker/",
            description: 'Amusing and irreverent acoustic-synth-folk simulataneously thought-provoking, heartfelt, and hilarious.',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "50 South Union Street",
        lat: 40.363604, lng: -74.943955,
        lineup: [
          {
            artist: "Misty Willow",
            description: 'Singer-songwriter who writes songs about u...',
            timeslot: "3pm-5pm",
          },
        ],
      },
      {
        address: "37 Jefferson Street",
        lat: 40.370144, lng: -74.944588,
        lineup: [
          {
            artist: "Tom Florek and Joe Bezek",
            link: "https://lambertvilleporchfest.com/artists/tom-florek-and-joe-bezek/",
            description: 'Hilariously funny syndicated radio duo performing their signature quirky originals. Think Flight of the Conchords They Might Be Giants.',
            timeslot: "3pm-5pm",
          },
        ],
      },
      {
        address: "20 Delevan Street",
        lat: 40.36921, lng: -74.946196,
        lineup: [
          {
            artist: "Chris Chadwick",
            link: "https://kittycityband.bandcamp.com/releases",
            description: "Acoustic blue-eyed soul with roots in the Greenwich Village folk scene.",
            timeslot: "12pm",
          },
          {
            artist: "Jimi Mitchell",
            link: "https://lambertvilleporchfest.com/artists/jimi-mitchell/",
            description: "Acoustic solo artist covering Bruce, Elvis, Johnny, J.T., Croce, Eagles and many more.",
            timeslot: "1pm",
          },
          {
            artist: "Greg Pontier",
            link: "https://kittycityband.bandcamp.com/releases",
            description: "Folk singer influenced by the music of James Taylor, Pete Seeger and songs of Social Justice.",
            timeslot: "2pm",
          },
          {
            artist: "Jimi Mitchell",
            link: "https://lambertvilleporchfest.com/artists/jimi-mitchell/",
            description: "Acoustic solo artist covering Bruce, Elvis, Johnny, J.T., Croce, Eagles and many more.",
            timeslot: "3pm",
          },
          {
            artist: "Creeping Charlie",
            link: "https://lambertvilleporchfest.com/artists/creeping-charlie/",
            description: 'Highly danceable cover band playing hits from Queen to Lizzo.',
            timeslot: "4pm-6pm",
          },
        ],
      },
      {
        address: "25 Ferry Street",
        lat: 40.364983, lng: -74.944373,
        lineup: [
          {
            artist: "Daniella Fischetti & Tim Ryan",
            link: "https://lambertvilleporchfest.com/artists/daniella-fischetti-tim-ryan/",
            description: "Young folks playing old-time bluegrass and fiddle tunes with flair and panache.",
            timeslot: "1pm",
          },
        ],
      },
      {
        address: "17 Clinton Street",
        lat: 40.368642, lng: -74.946805,
        lineup: [
          {
            artist: "LAURIE VOSBURG",
            link: "https://lambertvilleporchfest.com/artists/laurie-vosburg/",
            description: 'A mix of originals and country rocking blues',
            timeslot: "1pm",
          },
        ],
      },
      {
        address: "138 North Union Street",
        lat: 40.37146, lng: -74.946615,
        lineup: [
          {
            artist: "CLOVER",
            description: "Beautiful blend of original soul, rock, and pop that echoes timelessness.",
            timeslot: "3-4pm",
          }
        ],
      },
/*
      {
        address: "138 Union Street",
        lat: 40.371372, lng: -74.9466219,
        lineup: [
          {
            artist: "Dan Gober",
            link: "https://dangober.bandcamp.com/",
            description: 'All original Junk Rawk',
            timeslot: "2pm",
          },
          {
            artist: "Janine Olivia",
            link: "https://www.janineoliviamusic.com/",
            description: "Synth Pop",
            timeslot: "3pm",
          },
          {
            artist: "Those Looks",
            link: "https://thoselooks.bandcamp.com",
            description: 'Indie Dream Pop',
            timeslot: "4pm",
          },
          {
            artist: "Creeping Charlie",
            link: "https://creepingcharlie.bandcamp.com/releases",
            description: 'Danceable Roots Rock.',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "15 Klines Court",
        lat: 40.3654266, lng: -74.945317,
        lineup: [
          {
            artist: "Sam Steffen",
            link: "http://www.samsteffen.com",
            description: "Folk, singer-songwriter, Americana, acoustic solo artist",
            timeslot: "1pm",
          },
          {
            artist: "Little Flowers",
            link: "https://www.littleflowers.me/",
            description: 'Indie rock duo, bedroom folk, originals and covers, heady lyrics.',
            timeslot: "2pm",
          },
        ],
      },
      {
        address: "48 Coryell Street",
        lat: 40.367611, lng: -74.9442911,
        lineup: [
          {
            artist: "I Think Like Midnight",
            link: "http://www.ithinklikemidnight.com/",
            description: 'Succinct rock instrumentals',
            timeslot: "4pm",
          },
        ],
      },
      {
        address: "103 South Main Street; Mt Hope St. -side porch",
        lat: 40.362380, lng: -74.942560,
        lineup: [
          {
            artist: "Pat Foran",
            link: "https://patforanmusic.com",
            description: 'Bluesy grit to power pop',
            timeslot: "12pm",
          },
          {
            artist: "Kevin Hilferty",
            link: "https://www.youtube.com/watch?v=W3h7vkTDNKg",
            description: 'Classic tunes and originals. Claims not to know the names of the chords he is playing.',
            timeslot: "1pm",
          },
          {
            artist: "Andrew Dunn",
            description: '',
            timeslot: "2pm",
          },
          {
            artist: "Anthony Pasciutti",
            description: '',
            timeslot: "3pm",
          },
          {
            artist: "Emily Gabrielle",
            link: "https://www.egmusicnyc.com/",
            description: 'Pop infused with a bit of rock',
            timeslot: "4pm",
          },
          {
            artist: "Pat Foran",
            link: "https://patforanmusic.com",
            description: 'Bluesy grit to power pop',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "28 Coryell Street",
        lat: 40.367337, lng: -74.945545,
        lineup: [
          {
            artist: "Decibel and the Boom",
            link: "https://decibelandtheboom.bandcamp.com/track/running-in-circles",
            description: 'New Original Rock',
            timeslot: "2pm",
          },
          {
            artist: "The Fletchers",
            link: "https://www.facebook.com/TheFletchersMusic",
            description: 'Indie Rock, Power pop, Garage',
            timeslot: "3pm",
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
      */
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
