<template>
  <div class="contact-wrapper section-85 padding-64 center">
    <div class="contact-text">
      <h3>Send me a message</h3>
      <p>Please use this contact form to send me an message. In case you hate forms, just send me an email here.</p>
    </div>
    <div class="contact-form">
      <form @submit.prevent="submitForm" autocomplete="off">
        <div class="form-group">
          <label for="firstname">First name:</label><br><br>
          <input type="text" v-model="form.firstname" id="firstname" />
          <!-- <p v-if="$v.form.name.$error" class="error-message">The name field is required</p> -->
        </div>

        <div class="form-group">
          <label for="lastname">Last name</label><br><br>
          <input type="text" v-model.number="form.lastname" id="lastname" />
          <!-- <div v-if="$v.form.age.$error">
        <p v-if="!$v.form.age.required" class="error-message">The age field is required</p>
        <p v-else-if="!$v.form.age.integer" class="error-message">The age field should be an integer</p>
        <p v-else-if="!$v.form.age.oldEnoughAndAlive" class="error-message">You should be at least 12 and younger than 120 to continue</p>
          </div>-->
        </div>

        <div class="form-group">
          <label for="email">Email:</label><br><br>
          <input type="email" v-model="form.email" id="email" />
          <!-- <p v-if="!$v.form.email.email && $v.form.email.$error" class="error-message">Invalid email address</p> -->
          <!-- <p v-if="!$v.form.email.required && $v.form.email.$error" class="error-message">Email is required so we can send you the newsletter</p> -->
        </div>

        <div class="form-group">
          <label for="message">Your message here</label><br><br>
          <textarea v-model.number="form.message" id="message"></textarea>
          <!-- <p v-if="$v.form.food.$error && !$v.form.food.pizzaOrBurger" class="error-message">Sorry! We only serve pizzas and burgers</p> -->
        </div>

        <div class="submit-button">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
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