<template>
  <div class="btn-group">
    <button ref="view" class="btn btn-outline-primary btn-micro" @click="itemAction('view-item', rowData, rowIndex)"><i class="fa fa-search"></i></button>
    <button ref="edit" class="btn btn-outline-info btn-micro" @click="itemAction('edit-item', rowData, rowIndex)"><i class="fa fa-edit"></i></button>
    <button ref="delete" class="btn btn-outline-danger btn-micro" @click="itemAction('delete-item', rowData, rowIndex)"><i
        class="fa fa-remove"></i></button>
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
          this.$refs.delete.disabled = true

          axios
            .post('http://localhost/api/v1/taskset/delete', { id: data._id }, { headers: { 'x-access-token': token } })
            .then(() => {
              this.$refs.delete.disabled = false
              this.$parent.reload()
            })
            .catch(() => { })
        }
      }
    }
  }
</script>

<style>
</style>