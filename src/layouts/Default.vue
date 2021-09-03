<template>
  <div class="layout">
    <header class="header">
      <div :class="{open: menuOpen}">
        <strong>
          <g-link to="/">Lambertville Porchfest</g-link>
        </strong>
        <button class="burger" :class="{open: menuOpen}" @click="handleOpen">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
        </button>
      </div>
      <nav class="nav" :class="{open: menuOpen}" ref="nav">
        <g-link class="nav__link" to="/about/"><span>About</span></g-link>
        <g-link class="nav__link" to="/map/"><span>Map</span></g-link>
        <g-link class="nav__link" to="/sched/"><span>Schedule</span></g-link>
        <g-link class="nav__link" to="/porches/">Porches</g-link>
        <g-link class="nav__link" to="https://docs.google.com/forms/d/e/1FAIpQLSfGWsqy6rAya_yv_ucb2lPSynFVUi9zkGR9f9JjlFniP8bNNQ/viewform"><span>Porch Registration</span></g-link>
        <g-link class="nav__link" to="/faq/"><span>FAQ</span></g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    handleOpen() {
      this.menuOpen = !this.menuOpen;
    },
    handleClose() {
      // console.log('hey')
      // this.$refs.nav.classList.add('close');
      // setTimeout(() => {
      //   this.menuOpen = !this.menuOpen
      // }, 500);
    }
  }
}
</script>

<style>
:root {
  --text: #1d1e27;
  --border: #8a8fbb;
  --dark-gold: #7e671d;
  --gold: #AE9030;
  --light-gold: #ceb974;
  --light-blue: #a7aee6;
  --bg: #d7dbf5;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  /* background: var(--bg); */
  background: white;
  font-family: 'M PLUS 1p', sans-serif;
  font-weight: 500;
}
h1,h2,h3,h4,h5,h6 {
  text-transform: uppercase;
  font-weight: 500;
}
p {
  font-size: 18px;
}
h2 {
  border-bottom: 1px solid var(--gold);
}
header {
  padding-top: 32px;
}
header strong {
  display: block;
  width: 100%;
  text-transform: uppercase;
  font-size: 38px;
  font-weight: 500;
}
header strong a {
  text-decoration: none;
  color: var(--text);
  transition: color 1000ms ease;
}
nav.nav {
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
}
nav.nav .nav__link {
  font-size: 20px;
  color: var(--text);
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: all 200ms ease;
}
nav.nav .nav__link span {
  width: 100%;
  height: 100%;
  display: inline-block;
  transition: all 200ms ease;
}
nav.nav .nav__link span:hover {
  transform: translateY(-3px);
}
nav.nav .nav__link.active span {
  transform: translateY(-3px);
}
nav.nav .nav__link.active::after {
  width: 100%;
}
nav.nav .nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--border);
  transition: all 200ms ease;
  transform-origin: center;
}
nav.nav .nav__link:hover::after {
  width: 100%;
}
button.burger {
  display: none;
  border: none;
  background: none;
  width: 50px;
  height: 40px;
  z-index: 100;
  cursor: pointer;
}
button.burger .line {
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background: var(--text);
  margin: 12px 0;
  transition: all 1000ms ease;
}
button.burger.open .line-1 {
  transform: translateY(7px) rotate(45deg);
}
button.burger.open .line-2 {
  transform: translateY(-7px) rotate(-45deg);
}
img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 80px;
}
@media (max-width: 794px) {
  .layout {
    padding-left: 0px;
    padding-right: 0px;
  }
  button.burger {
    display: block;
  }
  header > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 100;
    padding-left: 20px;
    padding-right: 20px;
  }
  header > div.open strong a {
    color: white;
  }
  header > div.open button.burger .line {
    background-color: white;
  }
  nav.nav {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-200%);
    background: var(--text);
    color: white;
    height: 100vh;
    width: 100%;
    transition: all 500ms ease;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 32px;
  }
  nav.nav.open {
    transform: translateX(0%);
  }
  nav.nav.close {
    /* transform: translateX(-200%); */
    background: blue;
  }
  nav.nav a.nav__link {
    color: white;
    font-size: 32px;
    margin: 24px 0;
  }
  nav.nav a.nav__link.active {
    color: var(--dark-gold);
  }
  nav.nav a.nav__link:hover {
    transform: none;
  }
}
@media (max-width: 594px) {
  header strong {
    font-size: 26px;
  }
}
@media (max-width: 472px) {
  header strong {
    font-size: 22px;
  }
}
</style>
