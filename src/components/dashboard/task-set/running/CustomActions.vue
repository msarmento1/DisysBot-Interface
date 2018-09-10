<template>
  <div class="btn-group">
    <button class="btn btn-outline-primary btn-micro" @click="itemAction('view-item', rowData, rowIndex)"><i class="fa fa-search"></i></button>
    <button class="btn btn-outline-info btn-micro" @click="itemAction('edit-item', rowData, rowIndex)"><i class="fa fa-edit"></i></button>
    <button class="btn btn-outline-danger btn-micro" @click="itemAction('delete-item', rowData, rowIndex)"><i class="fa fa-remove"></i></button>
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
      itemAction (action, data, index) {
        console.log('custom-actions: ' + action, data.id, index)
      }
    }
  }
</script>

<style>

</style>