<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title'],
  created() {
    document.querySelectorAll('h1').classList.add('fat-header');
  }
}
</script>

<style scoped>

  h1 {
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 0px;
    border-bottom: 4px solid rgb(219, 215, 214);
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: grow 1s linear 0s 1 forwards;
    color: #F1A78D;
    font-size: 42px;
  }

</style>