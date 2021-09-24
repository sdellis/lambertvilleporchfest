<template>
  <Layout>
    <Header>Donate to our Ida Recovery Fund</Header>
    <p style="text-align:center;"><g-image alt="Post-Ida Disaster" src="~/post-ida-disaster.jpg" width="400" /></p>
    <p>We must acknowledge the traumatic experiences our community has been through in the wake of tropical storm Ida.
      The City of Lambertville is still in a state of emergency and many of our neighbors are still struggling to recover.
      We have dozens of homeless and displaced residents, and many more have been left with serious damage to their
      homes. It's particularly hard for our undocumented neighbors who may not be eligible for certain types of
      fed/state assistance. If there is any silver lining in this disaster, our heart is warmed by the outpouring of support
      and generosity I have seen within our community. We believe Lambertville needs Porchfest more than ever to bring us
      together in a way that only music can.</p>
      <p>If you, or someone you know, is struggling to recover from Ida, please reach out to
      <a href="mailto:PorchfestLambertville@gmail.com">PorchfestLambertville@gmail.com</a>
      and we can help connect you to assistance.</p>
      <h2>How to Help</h2>
      <button class="btn cta" @click="btnClick">Donate Now</button>
      <p>Lambertville Porchfest has partnered with <a href="https://soupcon.salon">Soupçon Salon</a>,
        a local 501(c)(3) non-profit focusing on the arts and mutual aid, to help with the recovery effort.
        Soupçon Salon Ida Recovery Fund Donations are tax-deductible and will prioritize direct monetary
        assistance and rent subsidies for undocumented Lambertville residents who were displaced by Ida.
        Please consider donating to keep our community together, to keep families together, and to keep school-aged
        children in the district with their friends and teachers.</p>
        <p style="text-align:center;"><g-image alt="Illustration of people distributing donations" src="~/ida-relief.png" width="400" /></p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Ida Recovery Fund'
  },
  methods : {
    btnClick: function(event) {
        window.open("https://soupcon-salon.square.site/");
    }
  },
}
</script>

<style scoped>
h2 {
  margin-top: 36px;
}

.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: var(--gold);
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.cta {
  border-color: var(--gold);
  background-image: linear-gradient(45deg, var(--gold) 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
}
.cta:hover {
  background-position: 0;
}
</style>
