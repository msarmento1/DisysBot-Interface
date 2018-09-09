export default {
  tableFields: [
    {
      name: 'name',
      title: 'name',
      sortField: 'name'
    },
    {
      name: 'remainingTasksCount',
      title: 'remaining tasks',
      sortField: 'remainingTasksCount'
    },
    {
      name: 'priority',
      title: 'priority'
    },
    {
      name: 'startTime',
      title: 'start time'
    },
    {
      name: '__component:custom-actions',
      title: '',
      dataClass: 'text-center'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
