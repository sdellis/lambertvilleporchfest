<template>
  <Layout>
  
  <VsaList>
    <VsaItem v-for="performance in performances">
      <VsaHeading>{{performance.artist}}</VsaHeading>
      <VsaContent>{{performance.description}}</VsaContent>
    </VsaItem>
  </VsaList>

  </Layout>
</template>

<script>
import performances from '../data/performances.json'
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  VsaIcon
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

export default {
  data() {
    return {
      performances: performances.data
    } 
  },
  computed: {
    byTime() {
      return performances.reduce((acculmulator, currentItem, currentIndex, array) => {
        
      }, [])
    }
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  }
}
</script>

<style scoped>
  h1 {
    background: red;
  }
</style>