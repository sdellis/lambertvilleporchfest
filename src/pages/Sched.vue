<template>
  <Layout>
    <Header>Schedule</Header>
    <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Porchfest merchandise is now available for pre-order! 👕</a></p>
    <!-- <p>Rest rooms are available in the parking lot next to <a href="http://maps.google.com/maps?q=12+Union+Street,+Lambertville,+NJ+08530">
12 N. Union Street</a>, <a href="https://www.google.com/maps/place/25+S+Union+St,+Lambertville,+NJ+08530"> the Justice Center (ACME building) on S. Union Street</a>, and <a href="http://maps.google.com/maps?q=3+Station+Ct,+Lambertville,+NJ+08530">
3 Station Ct</a>, or by patronizing one of our local restaurants. Porch hosts are not obligated to provide rest rooms.</p> -->

    <p class="stay-tuned">Stay tuned for the Porchfest schedule coming soon!</p>
    <h1>Noon</h1>
    <div v-for="artist in artists_12" :key="artist.id" class="porch d-flex">
      <h2>{{ artist.name }}</h2>
      <p>{{ artist.bio }}</p>
      <a href="">Go to porch</a>
    </div>

  </Layout>
</template>
<page-query>
query {
  porches: allPorches {
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
  artists: allArtists {
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
          as12.push(id)
        }
      })
      const artistsNoon = as12.map(x => this.findArtist(x))
      return artistsNoon
    },
  },
  methods: {
    findArtist: function(id) {
      var id = String(id)
      return this.$page.artists.edges.find(x => x.node.id === id).node
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
