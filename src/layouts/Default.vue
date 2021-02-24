<template>
  <div class="layout">
    <div class="body-wrapper"></div>
    <header class="header">
      <h1 class="title">
        <g-link to="/">Lambertville Porchfest</g-link>
      </h1>
      <nav class="nav">
        <g-link class="nav__link" to="/map/">Map</g-link>
        <g-link class="nav__link" to="/sched/">Schedule</g-link>
        <g-link class="nav__link" to="/sched2/">Sample Schedule</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/faq/">FAQ</g-link>
      </nav>
    </header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  position: relative;
  z-index: 0;
  background: white;
  color: rgb(46, 51, 47);
}

h1.title {
  font-weight: 300;
  font-size: 32px;
}

h1.title a {
  text-decoration: none;
  color: rgb(74, 82, 75);
}

.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.header .nav a {
  color: rgb(74, 82, 75);
  text-decoration: none;
  border-right: 1px solid black;
  padding: 0px 16px;
  transition: all 0.1s;

}

.header .nav a:hover {
  background: #F1A78D;
  color: white;
  border-right-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  transform: translateX(-10px);
  transition: all 0.1s;
}

.nav__link {
  margin-left: 20px;
}
.container {
  max-width: 760px;
  margin: 0 auto;
}

.btn {
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 8px 12px;
  border: none;
  background: #9fbba9;
  color: white;
  font-weight: 500;
  margin-bottom: 10px;
}

</style>
