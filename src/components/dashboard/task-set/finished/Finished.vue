<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div>
      <vuestic-widget :headerText="$t('menu.finished')">
        <vuestic-data-table ref="vuesticDataTable" :apiMode="apiMode" :apiUrl="apiUrl" :httpFetch="fetch" :tableFields="tableFields"
          :itemsPerPage="itemsPerPage" :onEachSide="onEachSide" :sortFunctions="sortFunctions"
          :dataModeFilterableFields="dataModeFilterableFields">
        </vuestic-data-table>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import FieldsDef from './fields-definition'
  import Vue from 'vue'
  import CustomActions from './CustomActions'

  Vue.component('custom-actions', CustomActions)

  export default {
    name: 'finished',

    data() {
      return {
        interval: {},
        apiMode: true,
        apiUrl: 'http://localhost/api/v1/taskset/finished',
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
    methods: {
      fetch(apiUrl, httpOptions) {
        const token = localStorage.getItem('token')
        return this.$http.get(apiUrl, { params: { token } })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.interval = setInterval(() => {
          this.$refs.vuesticDataTable.$refs.vuetable.refresh()
        }, 5000)
      })
    },
    beforeDestroy() {
      clearInterval(this.interval)
    }
  }
</script>