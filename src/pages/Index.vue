<template>
  <Layout>
    <div class="imgdiv">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Lambertville Porchfest, October 2, 2021, 12-6pm" src="~/porchfest-poster-2021.jpg"/>

    <!-- <h2>Lambertville's 2nd Annual<br>
      <abbr title="do-it-yourself">DIY</abbr> Music Festival</h2> -->
    <p>
      A do-it-yourself music festival featuring free shows on porches all over
      downtown Lambertville.<br>Anyone can host or play a show!
    </p>
    <p class="credit"><em>If you like the Lambertville Porchfest poster art, please consider dropping a tip to Anabel Bouza via Venmo: @Anabel-Bouza</em></p>
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
  max-width: 100%;
  height: auto;
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
</style>
