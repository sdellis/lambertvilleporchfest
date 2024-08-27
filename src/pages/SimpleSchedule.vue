<template>
  <Layout>
    <H1>Schedule</H1>
    <div class="gdoc-link"><a href="https://docs.google.com/document/d/1hjnukizlHzx69u0gMEMj0OL33APC1Jy5LIjP0p6bpB4/edit?usp=sharing">Click Here for the Lambertville Porchfest 2024 Schedule</a></div>
    <p>To add your porch or update your listing on this schedule, please request edit access to the document. If you’d like help with adding/updating your listing, send an email to <a href="mailto:lambertvilleporchfest@gmail.com">lambertvilleporchfest@gmail.com</a>.</p>
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
