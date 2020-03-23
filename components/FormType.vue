
<template>
  <div>
    <h1 class="title">Step 1</h1>

    <h2 class="subtitle">
Why are you contacting me    
</h2>

    <div class="plans">
      <div
        v-for="type in types"
        :key="type.name"
        @click="pickType(type)"
        :class="{'active-plan': selectedType === type}"
        class="plan"
      >
        <div class="description">
          <span class="title">
              {{type.name}}
          </span>
          <span class="description">
              {{type.description}}
          </span>
        </div>
      </div>
    </div>
    <div v-if="$v.selectedType.$error" class="error">you should pick a plan to continue</div>
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
            description: 'I would like a website'
          },
          {
            name: 'Project',
            description: 'I would like to work together on a project'
          },
          {
            name: 'No reason',
            description: 'Just wanted to say Hi'
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
