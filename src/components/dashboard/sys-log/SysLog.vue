<template>
  <vuestic-widget :headerText="$t('menu.logs')">
    <vuestic-data-table ref="vuesticDataTable" :apiMode="apiMode" :itemsPerPage="itemsPerPage" :onEachSide="onEachSide" :sortFunctions="sortFunctions"
      :apiUrl="apiUrl" :httpOptions="httpOptions" :tableFields="tableFields">
    </vuestic-data-table>
  </vuestic-widget>
</template>

<script>
  import FieldsDef from './fields-definition'

  export default {
    name: 'log',

    data() {
      return {
        interval: {},
        apiMode: true,
        apiUrl: 'http://localhost/api/v1/sys-log',
        httpOptions: { withCredentials: true },
        sortFunctions: FieldsDef.sortFunctions,
        onEachSide: 1,
        tableFields: FieldsDef.tableFields,
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