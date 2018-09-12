<template>
  <div class="btn-group">
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('view-item', rowData, rowIndex)"><i class="fa fa-pause"></i></button>
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('edit-item', rowData, rowIndex)"><i class="fa fa-play"></i></button>
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('delete-item', rowData, rowIndex)"><i class="fa fa-stop"></i></button>
  </div>
</template>

<script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    methods: {
      itemAction(action, data, index) {
        console.log('custom-actions: ' + action, data.id, index)
      }
    }
  }
</script>

<style>

</style>