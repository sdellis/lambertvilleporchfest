<template>
  <Layout>
    <div class="porchPage">
      <div class="porchPage__img"
           :style="{ 'background-image': 'url(' + $page.porch.image + ')' }"></div>
      <div class="container container--porch">
        <g-link to="/porches/" class="back"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>Back</g-link>
        <h1 class="porchPage__title">{{$page.porch.title}}</h1>
        <p class="slogan">{{$page.porch.message}}</p>
        <p>{{$page.porch.house_number}} {{$page.porch.street_name}}</p>
        <div v-html="$page.porch.content">
          {{$page.porch.content}}
        </div>
        <h2>Artist Schedule</h2>
        <ul>
          <li v-if="$page.porch.artist12.length > 0">Noon-1pm: {{$page.porch.artist12}}</li>
          <li v-if="$page.porch.artist1.length > 0">1-2pm: {{$page.porch.artist1}}</li>
          <li v-if="$page.porch.artist2.length > 0">2-3pm: {{$page.porch.artist2}}</li>
          <li v-if="$page.porch.artist3.length > 0">3-4pm: {{$page.porch.artist3}}</li>
          <li v-if="$page.porch.artist4.length > 0">4-5pm: {{$page.porch.artist4}}</li>
          <li v-if="$page.porch.artist5.length > 0">5-6pm: {{$page.porch.artist5}}</li>
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
    artist1
    artist2
    artist3
    artist4
    artist5
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
