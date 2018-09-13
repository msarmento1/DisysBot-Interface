<template>
  <div class="btn-group">
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('pause-item', rowData, rowIndex)"><i class="fa fa-pause"></i></button>
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('resume-item', rowData, rowIndex)"><i class="fa fa-play"></i></button>
    <button class="btn btn-outline-dark btn-micro" @click="itemAction('stop-item', rowData, rowIndex)"><i class="fa fa-stop"></i></button>
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

        if (action === 'pause-item') {
          axios.post('http://localhost/api/v1/slave/pause', { id: data._id }, { headers: { 'x-access-token': token } }).catch(() => { })
        } else if (action === 'resume-item') {
          axios.post('http://localhost/api/v1/slave/resume', { id: data._id }, { headers: { 'x-access-token': token } }).catch(() => { })
        } else if (action === 'stop-item') {
          axios.post('http://localhost/api/v1/slave/stop', { id: data._id }, { headers: { 'x-access-token': token } }).catch(() => { })
        }
      }
    }
  }
</script>

<style>
</style>