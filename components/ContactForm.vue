<template>
  <div class="contact-wrapper section-85 padding-64 center">
    <div class="contact-text">
      <h3>Send me a message</h3>
      <p>If you have any question, want to work together or just have a chat, send me a message using the form. <br>In case you hate forms, just <a href="mailto:ana.iulia24@icloud.com"><span style="color:#6C63FF">send me an email</span></a>.</p>
    </div>
    <div class="contact-form">
      <FormWizard />
      <!-- <form autocomplete="off" name="contact-form" method="POST" data-netlify="true" netlify>
        <div class="form-group-double">
        <div class="form-group">
          <label for="firstname">First name:</label><br><br>
          <input type="text" v-model="form.firstname" id="firstname" name="first_name"/>
        </div>

        <div class="form-group">
          <label for="lastname">Last name</label><br><br>
          <input type="text" v-model.number="form.lastname" id="lastname" name="last_name"/>
        </div>
        </div>

        <div class="form-group">
          <label for="email">Email:</label><br><br>
          <input type="email" v-model="form.email" id="email" name="email"/>
        </div>

        <div class="form-group">
          <label for="message">Message:</label><br><br>
          <textarea v-model.number="form.message" id="message" name="message"></textarea>
        </div>
          <button class="submit-button" type="submit">Submit</button>
      </form> -->
    </div>
  </div>
</template>
<script>
import FormWizard from './FormWizard';

export default {
        components: {
          FormWizard
      },
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        message: null
      }
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_contact.scss";
</style>