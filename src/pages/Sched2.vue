<template>
  <Layout>
  <PageHeader title="Sample Schedule" />
  <VsaList>
    <VsaItem v-for="performance in performances" v-bind:key="performance.id">
      <VsaHeading>
        {{moment(performance.timeslot).format('h:MM')}} - {{performance.artist}} @ {{performance.location}}
        </VsaHeading>
      <VsaContent>{{performance.description}}</VsaContent>
    </VsaItem>
  </VsaList>

  </Layout>
</template>

<script>
import PageHeader from '../components/layout/PageHeader';
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
      return this.performances.reduce((acc, item, index, arr) => {
        if (item == 1) {
          
        }
      }, [])
    }
  },
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    VsaIcon,
    PageHeader
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

</style>