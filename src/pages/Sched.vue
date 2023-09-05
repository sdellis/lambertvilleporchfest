<template>
  <Layout>
    <h1>Schedule</h1>
    <p>Lambertville Porchfest 2023 will be held on Saturday, October 7th.</p>
    <!-- <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Merchandise pre-order is closed! Taking new orders at Ely Park on Oct 2nd.👕</a></p> -->
    <!-- <p>Rest rooms are available in the parking lot next to <a href="http://maps.google.com/maps?q=12+Union+Street,+Lambertville,+NJ+08530">
12 N. Union Street</a>, <a href="https://www.google.com/maps/place/25+S+Union+St,+Lambertville,+NJ+08530"> the Justice Center (ACME building) on S. Union Street</a>, and <a href="http://maps.google.com/maps?q=3+Station+Ct,+Lambertville,+NJ+08530">
3 Station Ct</a>, or by patronizing one of our local restaurants. Porch hosts are not obligated to provide rest rooms.</p> -->
    <h1>Noon - 6pm</h1>
    <h2>Porch Concerts will happen around town, and the schedules will be posted here.</h2>
<!--
    <h1>Noon</h1>
    <div v-for="artist in artists_12" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>1pm</h1>
    <div v-for="artist in artists_1" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>2pm</h1>
    <div v-for="artist in artists_2" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>3pm</h1>
    <div v-for="artist in artists_3" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>4pm</h1>
    <div v-for="artist in artists_4" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>5pm</h1>
    <div v-for="artist in artists_5" :key="artist.id" class="porch d-flex">
      <h2><a :href="artist.path">{{ artist.name }}</a></h2>
      <p>{{ artist.bio }}</p>
      <p><a :href="artist.porchPath">Go to porch</a></p>
    </div>
    <h1>5pm-8pm</h1>

      <h2>Elks Lodge Open Mic @ 66 Wilson Street</h2>
      <p>The Elks will keep the party going with their monthly open mic (every first Saturday!)</p>
      <h2>City Wide Dance Party (at Hibernia Firehouse - 37 South Main Street)</h2>
      <p>Local DJs:</p>
        <ul>
          <li>DJ Rad (5pm) Fun/Groovy House</li>
          <li>Shaw Civitarese (6:30pm) Booty-shaking House</li>
        </ul> -->


  </Layout>
</template>
<page-query>
query {
  porches: allPorches(filter: { year: { eq: "2023" }}) {
    edges {
      node {
        id
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
        artist12
        artist1
        artist2
        artist3
        artist4
        artist5
      }
    }
  }
  artists: allArtists(filter: { year: { eq: "2023" }}) {
    edges {
      node {
        id
        title
        name
        path
        bio
        image
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
  computed:{
    artists_12(){
      var as12 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist12 === undefined || !porch.node.artist12){

        } else {
          var id = String(porch.node.artist12)
          as12.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsNoon = as12.map(x => this.findArtist(x))
      return artistsNoon
    },
    artists_1(){
      var as1 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist1 === undefined || !porch.node.artist1){

        } else {
          var id = String(porch.node.artist1)
          as1.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsOne = as1.map(x => this.findArtist(x))
      return artistsOne
    },
    artists_2(){
      var as2 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist2 === undefined || !porch.node.artist2){

        } else {
          var id = String(porch.node.artist2)
          as2.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsTwo = as2.map(x => this.findArtist(x))
      return artistsTwo
    },
    artists_3(){
      var as3 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist3 === undefined || !porch.node.artist3){

        } else {
          var id = String(porch.node.artist3)
          as3.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsThree = as3.map(x => this.findArtist(x))
      return artistsThree
    },
    artists_4(){
      var as4 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist4 === undefined || !porch.node.artist4){

        } else {
          var id = String(porch.node.artist4)
          as4.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsFour = as4.map(x => this.findArtist(x))
      return artistsFour
    },
    artists_5(){
      var as5 = []
      this.$page.porches.edges.forEach(function(porch){
        if(porch.node.artist5 === undefined || !porch.node.artist5){

        } else {
          var id = String(porch.node.artist5)
          as5.push({id: id, porchPath: porch.node.path})
        }
      })
      const artistsFive = as5.map(x => this.findArtist(x))
      return artistsFive
    },
  },
  methods: {
    findArtist: function(artist) {
      var id = String(artist.id)
      var a = this.$page.artists.edges.find(x => x.node.id === artist.id).node
      a.porchPath = artist.porchPath
      return a
    },
  }
}
</script>

<style scoped>
.travel-map {
  height: 800px;
}

.stay-tuned {
  font-size: 24px;
}

.act {
  background-color: #EEE;
  padding: 1em;
  margin-bottom: 1em;
}
</style>
