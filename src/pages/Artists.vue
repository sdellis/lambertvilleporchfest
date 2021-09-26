<template>
  <Layout>
    <div class="container">
      <Header>Participating Artists</Header>
      <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Porchfest merchandise is now available for pre-order! 👕</a></p>
      <div v-for="artist in $page.artists.edges" :key="artist.id" class="artist d-flex">
        <div class="artist__img" v-if="artist.node.image"
             :style="{ 'background-image': 'url(' + artist.node.image + ')' }"></div>
        <div class="artist__img placeholder"  v-else><p>No image available</p></div>
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
  box-shadow: 
      0 0px 1px hsl(0deg 0% 0% / 0.1),
      0 1px 2px hsl(0deg 0% 0% / 0.1),
      0 2px 4px hsl(0deg 0% 0% / 0.1),
      0 4px 8px hsl(0deg 0% 0% / 0.1),
      0 8px 16px hsl(0deg 0% 0% / 0.1);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
  padding: 1rem;
  transition: background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
}
.artist:hover {
  background-color: var(--light-blue);
  box-shadow: 
      0 2px 1px hsl(0deg 0% 0% / 0.1),
      0 4px 2px hsl(0deg 0% 0% / 0.1),
      0 8px 4px hsl(0deg 0% 0% / 0.1),
      0 16px 8px hsl(0deg 0% 0% / 0.1),
      0 32px 16px hsl(0deg 0% 0% / 0.1);
  transform: scale(1.05);
}
@media screen and (max-width: 992px) {
  .artist {
    display: block;
  }
}
.artist__title {
  margin-top: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
.artist__body {
  padding: 15px 30px;
}
em {
    display: block;
  width: 300px;
  height: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
  flex-shrink: 0;
}
.artist__img.placeholder {
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
@media screen and (max-width: 992px) {
  .artist__img {
    width: 100%;
    height: 180px;
  }
  .artist {
    display: block;
    margin-left: 12px;
    margin-right: 12px;
  }
  .artist:hover {
    transform: scale(1);
  }
}
</style>
