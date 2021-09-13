<template>
  <Layout>
    <div class="porchPage">
      <div class="porchPage__img"
           :style="{ 'background-image': 'url(' + $page.porch.image + ')' }"></div>
      <div class="container container--porch">
        <a href="" @click="$router.go(-1)" class="back"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>Back</a>
        <h1 class="porchPage__title">{{$page.porch.title}}</h1>
        <p class="slogan">{{$page.porch.message}}</p>
        <p>{{$page.porch.house_number}} {{$page.porch.street_name}}</p>
        <div v-html="$page.porch.content">
          {{$page.porch.content}}
        </div>
        <h2>Artist Schedule</h2>
        <ul>
          <li>Noon-1pm: <a :href="artist_12.path">{{artist_12.name}}</a></li>
          <li>1pm-2pm: <a :href="artist_1.path">{{artist_1.name}}</a></li>
          <li>2pm-3pm: <a :href="artist_2.path">{{artist_2.name}}</a></li>
          <li>3pm-4pm: <a :href="artist_3.path">{{artist_3.name}}</a></li>
          <li>4pm-5pm: <a :href="artist_4.path">{{artist_4.name}}</a></li>
          <li>5pm-6pm: <a :href="artist_5.path">{{artist_5.name}}</a></li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($path: String!) {
  porch: porches (path: $path) {
    title
    image
    message
    host
    street_name
    house_number
    lat
    lng
    email
    content
    path
    artist12
    artist3
  }
  artists: allArtists {
    edges {
      node {
        id
        title
        name
        path
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
      title: this.$page.porch.title
    };
  },
  data: function() {
    return {
      artistTemplate: { name: "", id: null, path: ""},
    }
  },
  computed:{
    artist_12(){
      if (this.$page.porch.artist12 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist12)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
    artist_1(){
      if (this.$page.porch.artist1 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist1)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
    artist_2(){
      if (this.$page.porch.artist2 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist2)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
    artist_3(){
      if (this.$page.porch.artist3 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist3)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
    artist_4(){
      if (this.$page.porch.artist4 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist4)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
    artist_5(){
      if (this.$page.porch.artist5 === undefined){
        return this.artistTemplate
      } else {
        var id = String(this.$page.porch.artist5)
        return this.$page.artists.edges.find(x => x.node.id === id).node
      }
    },
  }
};
</script>
<style scoped>
.container--porch {
  margin-top: -140px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 60px;
  margin-bottom: 100px;
}
@media screen and (max-width: 992px) {
  .container--porch {
    padding: 15px 20px;
  }
}
.porchPage__img {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
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
