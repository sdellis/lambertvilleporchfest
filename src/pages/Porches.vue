<template>
  <Layout>
    <div class="container">
      <h1>Participating Porches</h1>
      <!-- <p><a href="https://logowearhouse.shop/lambertville_porchfest/">Merchandise pre-order is closed! Taking new orders at Ely Park on Oct 2nd.👕</a></p> -->
      <p>Porchfest is October 1st, 2022. Registration is now open for Porch Hosts! <a href="https://forms.gle/aWaNMDc4u1QrpGLy6">Register here!</a></p>

      <div v-for="porch in $page.porches.edges" :key="porch.id" class="porch d-flex">
        <div class="porch__img" v-if="porch.node.image"
             :style="{ 'background-image': 'url(' + porch.node.image + ')' }"></div>
        <div class="porch__img placeholder"  v-else><p>No image available</p></div>
        <div class="porch__body">
          <g-link :to="porch.node.path" class="porch__link"></g-link>
          <h1 class="porch__title">{{porch.node.title}}</h1>
          <em>{{porch.node.house_number}} {{porch.node.street_name}}</em>
          <p class="porch__abstract">{{porch.node.message}}</p>
        </div>
      </div>

    </div>
  </Layout>
</template>
<page-query>
query {
  porches: allPorches(filter: { year: { eq: "2022" }}) {
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
    title: "Porches"
  },

};
</script>

<style scoped>
.porch {
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
.porch:hover {
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
  .porch {
    display: block;
    margin-left: 12px;
    margin-right: 12px;
  }
  .porch:hover {
    transform: scale(1);
  }
}
.porch__title {
  margin-top: 0;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
.porch__body {
  padding: 15px 30px;
}
.porch__link {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.porch__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
.porch__img.placeholder {
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.porch__abstract {
  margin: 0;
}
@media screen and (max-width: 992px) {
  .porch__img {
    width: 100%;
    height: 180px;
  }
}
</style>
