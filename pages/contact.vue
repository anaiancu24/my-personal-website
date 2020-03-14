<template>
  <div id="contact">
    <Navigation />
    <ContactForm />
    <Footer />
  </div>

</template>

<script>
import Navigation from '~/components/Navigation.vue'
import ContactForm from '~/components/ContactForm.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    Navigation,
    ContactForm,
    Footer
  }
}
</script>

<style>

</style>
