<template>
  <div class="form-group">
    <div class="input-group">
      <vuestic-file-upload v-model="directive.value" v-on:input="$emit('push-directive', directive)" required />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        directive: {
          id: null,
          type: 'file',
          value: []
        }
      }
    },
    mounted() {
      this.directive.id = this._uid
    }
  }
</script>