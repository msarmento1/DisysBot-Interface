<template>
  <div class="form-group">
    <div class="input-group">
      <input id="number-directive" v-model="directive.value" v-on:change="$emit('push-directive', directive)" required />
      <label class="control-label" for="number-directive">Number Directive</label><i class="bar"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        directive: {
          id: null,
          type: 'number',
          value: ''
        }
      }
    },
    mounted() {
      this.directive.id = this._uid
    }
  }
</script>