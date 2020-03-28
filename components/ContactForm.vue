<template>
  <div class="contact-wrapper section-85 padding-64 center">
    <div class="contact-text">
      <h3>Send me a message</h3>
      <p>If you have any question, want to work together or just have a chat, send me a message using the form. <br>In case you hate forms, just <a href="mailto:ana.iulia24@icloud.com"><span style="color:#6C63FF">send me an email</span></a>.</p>
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