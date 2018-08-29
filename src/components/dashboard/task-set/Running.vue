<template>
  <div class="data-visualisation-tab dashboard-tab">
      <div>
        <vuestic-widget :headerText="$t('menu.running')">
          <vuestic-data-table
            :apiMode="apiMode"
            :tableData="tableData"
            :tableFields="tableFields"
            :itemsPerPage="itemsPerPage"
            :onEachSide="onEachSide"
            :sortFunctions="sortFunctions"
            :dataModeFilterableFields="dataModeFilterableFields"
          >
          </vuestic-data-table>
        </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import TableData from './TableData'
  import FieldsDef from './fields-definition'
  import Vue from 'vue'
  import CustomActions from './CustomActions'

  Vue.component('custom-actions', CustomActions)

  export default {
    name: 'data-visualisation-tab',

    data () {
      return {
        apiMode: false,
        sortFunctions: FieldsDef.sortFunctions,
        tableData: TableData,
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
