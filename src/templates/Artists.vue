<template>
  <Layout>
    <div class="artistPage">
      <div v-if="$page.artist.image" class="artistPage__img"
           :style="{ 'background-image': 'url(' + $page.artist.image + ')' }"></div>
      <div v-else class="artistPage__img placeholder">No image available</div>
      <div class="container container--artist">
        <a href="" @click="$router.go(-1)" class="back"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>Back</a>
        <h1 class="artistPage__title">{{$page.artist.name}}</h1>
        <a :href="$page.artist.link" class="slogan">{{$page.artist.link}}</a>
        <p>{{$page.artist.bio}}</p>
        <div v-html="$page.artist.content">
          {{$page.artist.content}}
        </div>
        <h2>{{$page.artist.name}} is playing at the following porches:</h2>
        <ul>
          <li v-if="porch_12.node.path.length > 0">Noon-1pm: <a :href="porch_12.node.path" v-if="porch_12.node.path.length > 0">{{porch_12.node.title}} ({{porch_12.node.house_number}} {{porch_12.node.street_name}})</a></li>
          <li v-if="porch_1.node.path.length > 0">1pm-2pm: <a :href="porch_1.node.path" v-if="porch_1.node.path.length > 0">{{porch_1.node.title}} ({{porch_1.node.house_number}} {{porch_1.node.street_name}})</a></li>
          <li v-if="porch_2.node.path.length > 0">2pm-3pm: <a :href="porch_2.node.path" v-if="porch_2.node.path.length > 0">{{porch_2.node.title}} ({{porch_2.node.house_number}} {{porch_2.node.street_name}})</a></li>
          <li v-if="porch_3.node.path.length > 0">3pm-4pm: <a :href="porch_3.node.path" v-if="porch_3.node.path.length > 0">{{porch_3.node.title}} ({{porch_3.node.house_number}} {{porch_3.node.street_name}})</a></li>
          <li v-if="porch_4.node.path.length > 0">4pm-5pm: <a :href="porch_4.node.path" v-if="porch_4.node.path.length > 0">{{porch_4.node.title}} ({{porch_4.node.house_number}} {{porch_4.node.street_name}})</a></li>
          <li v-if="porch_5.node.path.length > 0">5pm-6pm: <a :href="porch_5.node.path" v-if="porch_5.node.path.length > 0">{{porch_5.node.title}} ({{porch_5.node.house_number}} {{porch_5.node.street_name}})</a></li>
        </ul>
        <h2>Support the Artists!</h2>
        <p>Most Porchfest artists play for free. If you enjoyed seeing {{$page.artist.name}}, please consider dropping a tip below.</p>
        <p>Venmo: <span v-if="$page.artist.venmo.length > 0">{{$page.artist.venmo}}</span><span v-else>???</span> | PayPal: <span v-if="$page.artist.paypal.length > 0">{{$page.artist.paypal}}</span><span v-else>???</span></p>
        <small><em>Artists! If this is you, and you want to update your information, email LambertvillePorchfest@gmail.com with any updates.</em></small>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  artist: artists (path: $path) {
    id
    title
    name
    bio
    image
    link
    venmo
    paypal
    email
  }
  porches: allPorches {
    edges {
      node {
        id
        title
        street_name
        house_number
        lat
        long
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
}
</page-query>
<script>
export default {
  components: {},
  metaInfo() {
    return {
      title: this.$page.artist.title
    };
  },
  data: function() {
    return {
      blankPorch: { node: { title: "", id: null, path: "", street_name: "", house_number: "" }},
    }
  },
  computed:{
    porch_12(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist12) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
    porch_1(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist1) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
    porch_2(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist2) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
    porch_3(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist3) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
    porch_4(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist4) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
    porch_5(){
      var id = String(this.$page.artist.id)
      var porch = this.$page.porches.edges.find(x => String(x.node.artist5) === id)
      if (porch === undefined){
        return this.blankPorch
      } else {
        return porch
      }
    },
  }
};
</script>
<style scoped>
h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
}
h2 {
  padding: 0.4rem 1rem 0.1rem 1rem;
  background-color: var(--light-blue);
}
ul {
  list-style: none;
  margin-bottom: 4.2rem;
}

ul li {
  margin: 1rem;
}
.container--artist {
  margin-top: -140px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 60px;
  margin-bottom: 100px;
  box-shadow:
    0 2px 1px hsl(0deg 0% 0% / 0.1),
    0 4px 2px hsl(0deg 0% 0% / 0.1),
    0 8px 4px hsl(0deg 0% 0% / 0.1),
    0 16px 8px hsl(0deg 0% 0% / 0.1),
    0 32px 16px hsl(0deg 0% 0% / 0.1);
}
@media screen and (max-width: 992px) {
  .container--artist {
    padding: 15px 20px;
  }
}
.artistPage__img {
  width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center;
  border-radius: 8px 8px 0px 0px;
}
.artistPage__img.placeholder {
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.back {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}
.svg-inline--fa{
  width: 20px;
  margin-right: 15px;
  color: #333;
}
.slogan{
  font-style: italic;
}
</style>
