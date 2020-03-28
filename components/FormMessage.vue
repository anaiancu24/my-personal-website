
<template>
  <div class="form_steps">
  <span class="form_steps-count"><span class="current-step">3</span>/3</span>
    <h4 class="form_steps-question mb1">Ask me anything</h4>
<!-- 
    <h2 class="subtitle">
      Where should we send your freshly roasted coffee beans?
    </h2> -->

    <form class="form" @input="submit">
      <div class="form-group">
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

