
<template>
  <div>
    <h3 class="title">Step 3</h3>
<!-- 
    <h2 class="subtitle">
      Where should we send your freshly roasted coffee beans?
    </h2> -->

    <form class="form" @input="submit">
      <div class="form-group">
        <label class="form-label" for="message">Your message</label>
        <textarea v-model="$v.form.message.$model" type="text" placeholder="Write something.." class="form-control" id="message"></textarea>
        <div v-if="$v.form.message.$error" class="error">field is required</div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        form: {
          message: null
        }
      }
    },
    methods: {
      submit () {
          this.$emit('update', {
            message: this.form.message
          })
      }
    },
    validations: {
      form: {
        message: {
          required
        }
      }
    }
  }
</script>

<style scoped>
</style>

