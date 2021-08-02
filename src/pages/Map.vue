<template>
  <Layout>
    <Header>Porch Map</Header>
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
    /*
      {
        address: '5 York Street',
        lat: '40.3680643',
        lng: '-74.9461641',
        lineup: [
          {
            artist: "Dave Iannucci",
            link: "https://www.facebook.com/bigflopmoptop/",
            description: "Song-a-day phenomenon keeps the solo tunes coming.",
            timeslot: "2pm",
          },
          {
            artist: "Pyrenesia",
            link: "https://www.facebook.com/bigflopmoptop/",
            description: "Django-inspired quartet of accordion, fiddle, guitar, and upright bass.",
            timeslot: "4pm",
          }
        ]
      },
      {
        address: '37 Clinton Street',
        lat: '40.369310',
        lng: '-74.947090',
        lineup: [
          {
            artist: "Tim Kelly and Ryan Spreen",
            description: "Classic Rock goodies from local duo. Guest appearances!",
            timeslot: "4pm-6pm",
          }
        ],
      },
      {
        address: "13 Lambert Lane",
        lat: 40.3658048, lng: -74.9468706,
        lineup: [
          {
            artist: "Brad Staudle",
            description: '"Silk and smoke" vocals. Like, for real. Brad croons out the best hits of the 60s through today.',
            timeslot: "12pm",
          },
          {
            artist: "Rachel Rosemarie",
            link: "https://rachelrosemarie.bandcamp.com/album/growing-plants-inside",
            description: "Solo alt folk originals. Eerily beautiful.",
            timeslot: "1pm",
          },
          {
            artist: "Alyssa Zajac",
            link: "https://www.youtube.com/user/lyssy42197/videos",
            description: "Playful and whimsical musings of a human bean, with baritone ukulele",
            timeslot: "2pm",
          }
        ],
      },
      {
        address: "37 Perry Street",
        lat: 40.3719588, lng: -74.9458192,
        lineup: [
          {
            artist: "Chris Zaic (The Brooks Brothers Blues Band)",
            link: "https://brooksblues.com/",
            description: 'Progressive and Traditional Blues',
            timeslot: "2pm",
          },
          {
            artist: "LisaBeth Weber",
            link: "http://lisabethweber.com/songwriting/",
            description: "Acoustic singer/songwriter",
            timeslot: "4pm",
          },
          {
            artist: "Mary Barry Freedman",
            link: "http://marybarrymusic.com",
            description: "Americana / Folk",
            timeslot: "5pm",
          }
        ],
      },
      {
        address: "63 Clinton Street",
        lat: 40.3701383, lng: -74.9472286,
        lineup: [
          {
            artist: "Shady Groove",
            link: "http://shadygrooveduo.com/",
            description: 'Classic Covers with strong vocal harmonies',
            timeslot: "1-3pm",
          },
        ],
      },
      {
        address: "163 North Union Street",
        lat: 40.3721668, lng: -74.9471219,
        lineup: [
          {
            artist: "Tōth",
            link: "http://tothtunes.com/",
            description: 'Wistful soundscapes from accomplished songwriter and instrumentalist',
            timeslot: "3pm",
          },
          {
            artist: "Alix Paul with Jeffrey Fadden",
            link: "https://alixpauljeffreyfadden.bandcamp.com/",
            description: "Stream of conscious soul jazz acoustic vibes",
            timeslot: "4pm",
          },
          {
            artist: "Tōth",
            link: "http://tothtunes.com/",
            description: 'Wistful soundscapes from accomplished songwriter and instrumentalist',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "40 Perry Street",
        lat: 40.3721268, lng: -74.9458424,
        lineup: [
          {
            artist: "Bill and Fred’s Excellent Adventure",
            link: "https://www.youtube.com/user/Fredington1",
            description: 'Acoustic Rock duo, possible comedy',
            timeslot: "12pm",
          },
          {
            artist: "Saloko",
            link: "https://facebook.com/salokomusic",
            description: "Acoustic originals with horns",
            timeslot: "1pm",
          },
          {
            artist: "Room for Mojo",
            link: "https://www.facebook.com/RoomForMojo/",
            description: 'Original funky rock',
            timeslot: "3pm",
          },
        ],
      },
      {
        address: "60 Elm Street",
        lat: 40.3740313, lng: -74.9460624,
        lineup: [
          {
            artist: "Chris Buccari",
            description: 'Classical guitar originals',
            timeslot: "12pm",
          },
          {
            artist: "Jason Bonthron",
            description: "Obscure hits and deep cuts played on ukulele",
            timeslot: "1pm",
          },
          {
            artist: "Chris Bonthron",
            description: 'Gypsy Jazz',
            timeslot: "2pm",
          },
          {
            artist: "Joseph Sommer",
            description: 'Grateful Dead, Phish, and jams.',
            timeslot: "3pm",
          },
          {
            artist: "Tim McKenzie",
            description: 'Grateful Dead faves, classic rock, and cowboy songs.',
            timeslot: "4pm",
          },
        ],
      },
      {
        address: "57 Buttonwood Street",
        lat: 40.372940, lng: -74.945220,
        lineup: [
          {
            artist: "Cari Joy and Kealan",
            description: '90s covers, originals, love songs',
            timeslot: "12pm",
          },
          {
            artist: "Kitty City",
            link: "https://kittycityband.bandcamp.com/releases",
            description: "Indie Rock",
            timeslot: "1pm",
          },
          {
            artist: "The Swiss Guard",
            link: "https://www.facebook.com/theSwissGuard/",
            description: 'Indie Rock',
            timeslot: "2pm",
          },
        ],
      },
      {
        address: "270 North Union Street",
        lat: 40.375760, lng: -74.947820,
        lineup: [
          {
            artist: "Stephen DiJoseph",
            link: "http://www.stephendijoseph1.bandcamp.com",
            description: "Songwriter pop/jazz/folk",
            timeslot: "3pm",
          },
        ],
      },
      {
        address: "22 South Union Street",
        lat: 40.3646971, lng: -74.944364,
        lineup: [
          {
            artist: "J.B. Kline",
            link: "https://www.jbkline.com/",
            description: 'Local legend. Blues and soul, with passion.',
            timeslot: "5pm",
          },
        ],
      },
      {
        address: "7 North Main Street",
        lat: 40.3668222, lng: -74.9431814,
        lineup: [
          {
            artist: "Quarters on the Machine",
            description: "Local virtuosos play folk, Bluegrass, New Grass, Old Time, Scandinavian.",
            timeslot: "12-2pm",
          }
        ],
      },
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
