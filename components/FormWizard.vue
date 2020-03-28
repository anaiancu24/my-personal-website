<template>
  <div>
    <FormType v-if="currentStepNumber === 1" @update="processStep"/>
    <FormData v-if="currentStepNumber === 2" @update="processStep"/>
    <FormMessage v-if="currentStepNumber === 3" @update="processStep"/>

    <form
  name="ContactFormWizard"
  method="POST"
  data-netlify="true">
  <input name="type" type="hidden" :value="form.type.description" />
  <input name="firstname" type="hidden" :value="form.firstname" />
  <input name="lastname" type="hidden" :value="form.lastname" />
    <input name="email" type="hidden" :value="form.email" />
    <input name="message" type="hidden" :value="form.message" />
    <input type="submit" name="Submit" class="btn-submit" v-if="currentStepNumber == 3">

</form>
    <!-- <div class="progress-bar">
      <div :style="`width: ${progress}%;`"></div>
    </div> -->

    <!-- Actions -->
    <div class="buttons mt-50">
      <button
        @click="goBack"
        v-if="currentStepNumber > 1"
        class="btn-back"
      >Back
      </button>
      <button
        @click="goNext"
        v-if="currentStepNumber < 3"
        class="btn-next"
      >Next</button>
    </div>
  </div>
</template>

<script>
import FormType from './FormType'
import FormData from './FormData'
import FormMessage from './FormMessage'

export default {
  name: 'FormWizard',
  components: {
    FormType,
    FormData,
    FormMessage
  },
  data () {
    return {
      currentStepNumber: 1,
      length: 3,
      form: {
        type: {
          name:null,
          description:null
        },
        firstname: null,
        lastname:null,
        email: null,
        message: null,
      }
    }
  },
  computed: {
    progress () {
      return this.currentStepNumber/this.length * 100
    }
  },
  methods: {
    goBack () {
      this.currentStepNumber--
    },
    goNext () {
      this.currentStepNumber++
    },
    processStep (stepData) {
      Object.assign(this.form, stepData)
    },
  }
}
</script>