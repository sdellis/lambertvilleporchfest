<template>
  <Layout>

  <VsaList>
    <VsaItem v-for="performance in performances" v-bind:key="performance.id">
      <VsaHeading>
        {{moment(performance.timeslot).format('h:MM P')}} - {{performance.artist}} @ {{performance.location}}
        </VsaHeading>
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
import moment from 'moment';

export default {
  data() {
    return {
      performances: performances.data,
      sortBy: 'time',
      times: [1, 2, 3, 4, 5]
    } 
  },
  computed: {
    byTime() {
      return this.performances.filter(item => item.timeslot !== time);
    }
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon
  },
  created() {
    console.log(this.byTime);
  },
  methods: {
    moment: function() {
      return moment();
    }
  }
}

</script>

<style scoped>
  h1 {
    /* background: red; */
  }
</style>