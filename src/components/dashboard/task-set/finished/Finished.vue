<template>
  <vuestic-widget :headerText="$t('menu.finished')">
    <vuestic-data-table ref="vuesticDataTable" :apiMode="apiMode" :apiUrl="apiUrl" :httpOptions="httpOptions"
      :tableFields="tableFields" :itemsPerPage="itemsPerPage" :onEachSide="onEachSide" :sortFunctions="sortFunctions"
      :dataModeFilterableFields="dataModeFilterableFields">
    </vuestic-data-table>
  </vuestic-widget>
</template>

<script>
  import FieldsDef from './fields-definition'
  import Vue from 'vue'
  import CustomActions from './CustomActions'

  Vue.component('finished-custom-actions', CustomActions)

  export default {
    name: 'finished',

    data() {
      return {
        interval: {},
        apiMode: true,
        apiUrl: 'http://localhost/api/v1/taskset/finished',
        httpOptions: {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        },
        sortFunctions: FieldsDef.sortFunctions,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
        dataModeFilterableFields: ['name'],
        itemsPerPage: [
          {
            value: 10
          },
          {
            value: 15
          },
          {
            value: 20
          }
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.interval = setInterval(() => {
          this.$refs.vuesticDataTable.$refs.vuetable.reload()
        }, 5000)
      })
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>