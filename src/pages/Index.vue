<template>
  <Layout>
    <div class="imgdiv">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Lambertville Porchfest, October 1, 2022, 12-6pm" src="~/porchfest-poster-2022.gif"/> -->
    <figure>
      <img src="/images/2024-PORCHFEST-DESIGN.png" alt="Lambertville Porchfest Artwork, Sunday October 13, 2024, 12-6pm"/>
      <figcaption>
        Porchfest 2024 Artwork by Lambertville artist, Darren Francis McManus <br/>
        T-Shirts will be on sale at the Mary Sheridan Park Gazebo on York Street.
      </figcaption>
    </figure>
    <!-- <h2>Lambertville's 2nd Annual<br>
      <abbr title="do-it-yourself">DIY</abbr> Music Festival</h2> -->
    <p>
      A do-it-yourself music and arts festival featuring free shows on porches all over Lambertville.
      <br>Anyone can host or play a show!
    </p>
    <!-- <p class="credit"><em>Porchfest 2023 poster art is in the works. Stay tuned!</em></p> -->
  </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Lambertville Porchfest'
  },
}
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
img {
  max-width: 600px;
  height: auto;
  margin-top: 30px;
}
h2 {
  font-size: 32px;
}
p {
  max-width: 80%;
  margin: 32px auto;
  font-size: 24px;
}
.imgdiv {
  text-align: center;
}
.credit {
  font-size: 1em;
}
@media (max-width: 794px) {
  img {
    max-width: 100%;
  }
}
</style>
