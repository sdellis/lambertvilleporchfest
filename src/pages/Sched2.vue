<template>
  <Layout>
  <PageHeader title="Sample Schedule" />

  <button class="btn" @click="toggleSortBy">Sort by {{ sortBy == 'time' ? 'location' : 'time' }}</button>

  <VsaList v-show="sortBy === 'time'">
    <VsaItem v-for="time in performancesByTime" v-bind:key="time.id">
      <VsaHeading>
        {{ time.timeslot }}
        </VsaHeading>
      <VsaContent>
        <div v-for="artist in time.artists" v-bind:key="artist.id">
          {{ artist.artist }} @ {{ artist.location }}
        </div>
      </VsaContent>
    </VsaItem>
  </VsaList>

  <VsaList v-show="sortBy === 'location'">
    <VsaItem v-for="location in performancesByLocation" v-bind:key="location.id">
      <VsaHeading>
        {{ location.location }}
        </VsaHeading>
      <VsaContent>
        <div v-for="artist in location.artists" v-bind:key="artist.id">

          {{ artist.artist }} @ {{ artist.timeslot }}

        </div>
      </VsaContent>
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
    performancesByTime() {
      return this.performances.reduce((newArr, item, index, arr) => {
        // if first index, create new object
        if (index === 0) {
          newArr.push({
            timeslot: item.timeslot,
            artists: [item]
          });
        } else {
          // cycle through timeslots 
          for (let i = 0; i < newArr.length; i++) {
            // if timeslots match, add artist to array
            if(newArr[i].timeslot === item.timeslot) {
              newArr[i].artists.push(item);
              return newArr;
            }
          }
          // if no timeslots were found create new object
          newArr.push({
            timeslot: item.timeslot,
            artists: [item]
          })
        }
        return newArr;
      }, []);
    },
    performancesByLocation() {
      return this.performances.reduce((newArr, item, index, arr) => {
        // if first index, create new object
        if (index === 0) {
          newArr.push({
            location: item.location,
            artists: [item]
          });
        } else {
          // cycle through location 
          for (let i = 0; i < newArr.length; i++) {
            // if location match, add artist to array
            if(newArr[i].location === item.location) {
              newArr[i].artists.push(item);
              return newArr;
            }
          }
          // if no location were found create new object
          newArr.push({
            location: item.location,
            artists: [item]
          })
        }
        return newArr;
      }, []);
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
    console.log(this.performancesByLocation);
  },
  methods: {
    moment: function() {
      return moment();
    },
    toggleSortBy: function() {
      // return this.sortBy = !this.sortBy;
      // console.log('clicked')
      if (this.sortBy == 'time') {
        return this.sortBy = 'location';
      } else {
        return this.sortBy = 'time';
      }
    }
  }
}

</script>

<style scoped>

</style>