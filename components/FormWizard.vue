<template>
  <div>
    <FormData v-if="currentStepNumber === 1"/>
    <FormMessage v-if="currentStepNumber === 2"/>

    <div class="progress-bar">
      <div :style="`width: ${progress}%;`"></div>
    </div>

    <!-- Actions -->
    <div class="buttons">
      <button
        @click="goBack"
        v-if="currentStepNumber > 1"
        class="btn-outlined"
      >Back
      </button>
      <button
        @click="goNext"
        class="btn"
      >Next</button>
    </div>

    <pre><code>{{form}}</code></pre>
  </div>
</template>

<script>
import FormData from './FormData'
import FormMessage from './FormMessage'

export default {
  name: 'FormWizard',
  components: {
    FormData,
    FormMessage
  },
  data () {
    return {
      currentStepNumber: 1,
      length: 2,
      form: {
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
    }
  }
}
</script>