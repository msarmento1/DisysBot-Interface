<template>
  <div class="btn-group">
    <button ref="pause" class="btn btn-outline-dark btn-micro" @click="itemAction('pause-item', rowData, rowIndex)"><i class="fa fa-pause"></i></button>
    <button ref="resume" class="btn btn-outline-dark btn-micro" @click="itemAction('resume-item', rowData, rowIndex)"><i
        class="fa fa-play"></i></button>
    <button ref="stop" class="btn btn-outline-dark btn-micro" @click="itemAction('stop-item', rowData, rowIndex)"><i class="fa fa-stop"></i></button>
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
        if (action === 'pause-item') {
          this.$refs.pause.disabled = true

          axios
            .post('http://localhost/api/v1/slave/pause', { id: data._id }, { withCredentials: true })
            .then(() => {
              this.$refs.pause.disabled = false
            })
            .catch(() => {
              this.$refs.pause.disabled = false
            })
        } else if (action === 'resume-item') {
          this.$refs.resume.disabled = true

          axios
            .post('http://localhost/api/v1/slave/resume', { id: data._id }, { withCredentials: true })
            .then(() => {
              this.$refs.resume.disabled = false
            })
            .catch(() => {
              this.$refs.resume.disabled = false
            })
        } else if (action === 'stop-item') {
          this.$refs.stop.disabled = true

          axios
            .post('http://localhost/api/v1/slave/stop', { id: data._id }, { withCredentials: true })
            .then(() => {
              this.$refs.stop.disabled = false
            })
            .catch(() => {
              this.$refs.stop.disabled = false
            })
        }
      }
    }
  }
</script>

<style>
</style>