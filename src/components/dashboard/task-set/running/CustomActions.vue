<template>
  <div class="btn-group">
    <button class="btn btn-outline-primary btn-micro" @click="itemAction('view-item', rowData, rowIndex)"><i class="fa fa-search"></i></button>
    <button class="btn btn-outline-info btn-micro" @click="itemAction('edit-item', rowData, rowIndex)"><i class="fa fa-edit"></i></button>
    <button class="btn btn-outline-danger btn-micro" @click="itemAction('delete-item', rowData, rowIndex)"><i class="fa fa-remove"></i></button>
  </div>
</template>

<script>
  import axios from 'axios'

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
        const token = localStorage.getItem('token')

        if (action === 'view-item') {

        } else if (action === 'edit-item') {

        } else if (action === 'delete-item') {
          axios.post('http://localhost/api/v1/taskset/delete', { id: data._id }, { headers: { 'x-access-token': token } }).catch(() => { })
        }
      }
    }
  }
</script>

<style>
</style>