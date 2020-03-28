
<template>
  <div class="form_steps">
    <span class="form_steps-count"><span class="current-step">1</span>/3</span>
    <h4 class="form_steps-question">Why are you contacting me</h4>
  <form name="ContactStep1" method="POST" netlify>
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
          <span class="title">
              {{type.name}}
          </span>
          <p class="description">
              {{type.description}}
          </p>
        </div>
      </div>
    </div>
    <div v-if="$v.selectedType.$error" class="error">you should pick a plan to continue</div>
  </form>

  </div>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        types: [
          {
            name: 'Website',
            description: 'Short-term Project'
          },
          {
            name: 'Project',
            description: 'Long-term Project'
          },
          {
            name: 'No reason',
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
