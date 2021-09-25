<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  box-shadow: 
      0 0px 1px hsl(0deg 0% 0% / 0.1),
      0 1px 2px hsl(0deg 0% 0% / 0.1),
      0 2px 4px hsl(0deg 0% 0% / 0.1),
      0 4px 8px hsl(0deg 0% 0% / 0.1),
      0 8px 16px hsl(0deg 0% 0% / 0.1);
  border-radius: 8px;
  position: relative;
  margin-top: 50px;
  background-color: #fff;
  padding: 1rem;
  transition: background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
}
.card:hover {
  /* color: white; */
  background-color: var(--light-blue);
  box-shadow: 
      0 2px 1px hsl(0deg 0% 0% / 0.1),
      0 4px 2px hsl(0deg 0% 0% / 0.1),
      0 8px 4px hsl(0deg 0% 0% / 0.1),
      0 16px 8px hsl(0deg 0% 0% / 0.1),
      0 32px 16px hsl(0deg 0% 0% / 0.1);
  transform: scale(1.05);
}
@media screen and (max-width: 992px) {
  .porch {
    display: block;
  }
}
/* .porch__img {
  width: 250px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-right: 15px;
}
.porch__img.placeholder {
  background: rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
} */
.porch__abstract {
  margin: 0;
}
@media screen and (max-width: 992px) {
  .porch__img {
    width: 100%;
    height: 180px;
  }
}
</style>