
<template>
  <div class="form_steps">
        <span class="form_steps-count"><span class="current-step">2</span>/3</span>
    <h4 class="form_steps-question mb1">Your details</h4>
<!-- 
    <h2 class="subtitle">
      Where should we send your freshly roasted coffee beans?
    </h2> -->
    <!-- <form class="form" @input="submit"> -->
      <form class="form" @input="submit">
      <div class="form-group-double">
      <div class="form-group">
        <label class="form-label" for="first_name">First name</label>
        <input v-model="$v.form.firstname.$model" type="text" placeholder="First name" class="form-control" id="first_name">
        <div v-if="$v.form.firstname.$error" class="error">field is required</div>
      </div>

      <div class="form-group">
        <label class="form-label" for="last_name">Last name</label>
        <input v-model="$v.form.lastname.$model" placeholder="Last name" rows="3" class="form-control" id="last_name">
        <div v-if="$v.form.lastname.$error" class="error">field is required</div>
      </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="address">Email</label>
        <input v-model="$v.form.email.$model" placeholder="example@example.com" rows="3" class="form-control" id="email">
        <div v-if="$v.form.email.$error" class="error">field is required</div>
      </div>
          </form>
    <!-- </form> -->
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        form: {
          firstname: null,
          lastname: null,
          email: null
        }
      }
    },
    methods: {
      submit () {
          this.$emit('update', {
            firstname: this.form.firstname,
            lastname: this.form.lastname,
            email: this.form.email
          })
      }
    },
    validations: {
      form: {
        firstname: {
          required
        },
        lastname: {
          required
        },
        email: {
            required
        }
      }
    }
  }
</script>

<style scoped>
</style>

