<template>
  <div class="banner">
    <div class="announcement" role="alert">
        <slot>{{ bannerMessage }}</slot>
      </wrapper>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
  .announcement {
   position: relative;
   background: #d7dbf6;
   border: 1px solid var(--light-blue);
   color: black;
   font-size: x-small;
   padding: 0.3rem 0.3rem 0.3rem 0.3rem;
   transition: 0.2s;
   z-index: 1;
   text-align: center;
  }

  .announcement a {
    color: var(--text);
    transition: 0.25s ease;
  }
</style>
