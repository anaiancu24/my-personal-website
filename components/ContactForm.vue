<template>
  <div class="contact-wrapper section-85 padding-64 center">
    <div class="contact-text">
      <h3>Send me a message</h3>
      <p>If you have any questions, would like to work together or just want to say hi, please use the form on the right to send me a message.<br>In case you hate forms, just <a href="mailto:ana.iulia24@icloud.com"><span style="color:#121212">send me an email</span></a>.</p>
    </div>
    <div class="contact-form">
      <FormWizard />
    </div>
  </div>
</template>
<script>
import FormWizard from './FormWizard';

export default {
        components: {
          FormWizard
      }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_contact.scss";
</style>