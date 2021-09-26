<template>
  <h1 class="title"><slot /></h1>
</template>

<script>
export default {

}
</script>

<style scoped>
 h1.title {
   /* background-color: var(--bg); */
   /* color: white; */
   padding: 0.5rem;
   font-family: 'Forum', cursive;
   letter-spacing: 2px;
   font-weight: 700;
   /* border-left: 3px solid var(--gold); */
   border-bottom: 2px solid var(--light-blue);
   text-transform: none;
   padding-left: 3.2rem;
   margin-top: 2.8rem;
 } 
 @media (max-width: 700px) {
  h1.title {
    padding-left: 1rem;
  }
}
</style>