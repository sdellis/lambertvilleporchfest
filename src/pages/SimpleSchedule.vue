<template>
  <Layout>
    <H1>Schedule</H1>
    <h2>Sunday, October 13th from 12-6pm</h2>
    <div class="gdoc-link"><a href="https://docs.google.com/document/d/1hjnukizlHzx69u0gMEMj0OL33APC1Jy5LIjP0p6bpB4/edit?usp=sharing">Click Here for the Lambertville Porchfest 2024 Schedule</a></div>
    <p>To add your porch or update your listing on this schedule, please request edit access to the document. If you’d like help with adding/updating your listing, send an email to <a href="mailto:lambertvilleporchfest@gmail.com">lambertvilleporchfest@gmail.com</a>.</p>
   <br>
    <figure>
      <img src="/images/Makbet+2024++.jpg" alt="Flyer for Makbet by Dzieci Theater, Sunday October 13, 2024, 6pm"/>
      <figcaption>
        Dzieci Theater will enthrall you will a unique performance of MacBeth as Porchfest's closing performance. Free Show @ 6pm at the Kalmia Club on 37 York Street
      </figcaption>
    </figure>
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
    title: 'Schedule'
  },
}
</script>

<style scoped>
 .gdoc-link a {
   font-size: 2rem;
 }
</style>
