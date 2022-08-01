<template>
  <Layout>
    <div class="imgdiv">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Lambertville Porchfest, October 1, 2022, 12-6pm" src="~/porchfest-poster-2022.gif"/> -->
    <img src="/images/porchfest-poster-2022.gif" alt="Lambertville Porchfest, October 1, 2022, 12-6pm"/>
    <!-- <h2>Lambertville's 2nd Annual<br>
      <abbr title="do-it-yourself">DIY</abbr> Music Festival</h2> -->
    <p>
      A do-it-yourself music festival featuring free shows on porches all over
      downtown Lambertville.<br>Anyone can host or play a show!
    </p>
    <p class="credit"><em>If you like the Lambertville Porchfest poster art,
      please consider supporting Bennett Kjenstad by bringing a shirt + $10 to
      Young Bennett at 56 Coryell Street on October 1st for a hand-pulled screen
      print of the 2022 logo. 👕</a></em></p>
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
