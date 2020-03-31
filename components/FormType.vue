
<template>
  <div class="form_steps">
    <span class="form_steps-count"><span class="current-step">1</span>/3</span>
    <h4 class="form_steps-question">Why you're contacting me</h4>
    <div class="form_steps-types">
      <div
        :name="selectedType"
        class="type"
        v-for="type in types"
        :key="type.name"
        @click="pickType(type)"
        :class="{'active-type': selectedType === type}"
      >
        <div class="type--description">
          <img :src="type.icon" class="form_type-icon" alt="web-development"/>
          <p class="description">
              {{type.description}}
          </p>
        </div>
      </div>
    </div>
    <!-- <div v-if="$v.selectedType.$error" class="error">you should pick a plan to continue</div> -->
  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        types: [
          {
            icon: '/images/form_type-shortterm.svg',
            description: 'Short-term Project'
          },
          {
            icon: '/images/form_type-longterm.svg',
            description: 'Long-term Project'
          },
          {
            icon: '/images/form_type-hello.svg',
            description: 'Just to say HI'
          }
        ],
        selectedType: null
      }
    },
    validations: {
      selectedType: {
        required
      }
    },
    methods: {
      pickType (type) {
        this.selectedType = type
        this.$emit('update', {
          type: this.selectedType
        })
      }
    }
  }
</script>
