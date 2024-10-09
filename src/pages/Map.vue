<template>
  <Layout>
    <H1>Porch Events Map</H1>
    <iframe
      id="porchfest-map"
      title="2024 Lambertville Porchfest Map"
      src="https://www.google.com/maps/d/embed?mid=1r48xVpg3eAQnPKve3gHuxZauTKYWacs&ehbc=2E312F" width="640" height="480">
    </iframe>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Map / Schedule'
  },
}
</script>

<style scoped>
iframe {
  border: 1px solid black;
  width: 100%; /* takes precedence over the width set with the HTML width attribute */
}
</style>
