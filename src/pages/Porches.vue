<template>
  <Layout>
    <div class="container">
      <Header>List porches</Header>
      <div v-for="porch in $page.porches.edges" :key="porch.id" class="porch d-flex">
        <div class="porch__img"
             :style="{ 'background-image': 'url(' + porch.node.image + ')' }"></div>
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
        lng
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
  box-shadow: 5px 5px 11px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
}
@media screen and (max-width: 992px) {
  .porch {
    display: block;
  }
}
.porch__title {
  margin-top: 0;
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
@media screen and (max-width: 992px) {
  .porch__img {
    width: 100%;
    height: 180px;
  }
}
</style>
