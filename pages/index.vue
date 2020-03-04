<template>
  <div id="app">
    <Navigation />
    <Header />
    <About />
    <Skills />
  </div>

</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'

export default {
  components: {
    Navigation,
    Header,
    About,
    Skills
  }
}
</script>

<style>

</style>
