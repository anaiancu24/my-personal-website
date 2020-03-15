<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
    <Skills />
    <CTA />
    <Portofolio />
    <CTA />
    <Footer />
  </div>

</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'
import CTA from '~/components/CTA.vue'
import Portofolio from '~/components/Portofolio.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Navigation,
    Header,
    About,
    Skills,
    CTA,
    Portofolio,
    Footer
  }
}
</script>

<style>

</style>
