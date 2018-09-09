<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div>
      <vuestic-widget :headerText="$t('menu.running')">
        <vuestic-data-table :apiMode="apiMode" :apiUrl="apiUrl" :httpFetch="fetch" :tableFields="tableFields" :itemsPerPage="itemsPerPage"
          :onEachSide="onEachSide" :sortFunctions="sortFunctions" :dataModeFilterableFields="dataModeFilterableFields">
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
    name: 'data-visualisation-tab',

    data() {
      return {
        apiMode: true,
        apiUrl: 'http://localhost:16181/api/v1/taskset/running',
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }
</style>