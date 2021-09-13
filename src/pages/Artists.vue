<template>
  <Layout>
    <div class="container">
      <Header>Participating Artists</Header>
      <div v-for="artist in $page.artists.edges" :key="artist.id" class="artist d-flex">
        <div class="artist__img"
             :style="{ 'background-image': 'url(' + artist.node.image + ')' }"></div>
        <div class="artist__body">
          <g-link :to="artist.node.path" class="artist__link"></g-link>
          <h1 class="artist__title">{{artist.node.name}}</h1>
          <em>{{artist.node.bio}}</em>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  artists: allArtists {
    edges {
      node {
        id
        title
        name
        bio
        image
        link
        venmo
        paypal
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
    title: "Artists"
  },

};
</script>

<style scoped>
.artist {
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .artist {
    display: block;
  }
}
.artist__title {
  margin-top: 0;
}
.artist__body {
  padding: 15px 30px;
}
.artist__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.artist__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
@media screen and (max-width: 992px) {
  .artist__img {
    width: 100%;
    height: 180px;
  }
}
</style>
