<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title']
}
</script>

<style scoped>

  h1 {
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 0px;
    border-bottom: 3px solid #d3e9da;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: grow 1s linear 0s 1 forwards;
    color: #F1A78D;
    font-size: 42px;
    font-weight: 600;
  }

</style>