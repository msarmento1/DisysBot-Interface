// import moment from 'moment'

export default {
  tableFields: [
    {
      name: 'name',
      title: 'name'
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
      title: 'start time',
      sortField: 'startTime',
      callback: 'formatDate|DD/MM/YYYY, HH:mm:ss.SSS Z'
    },
    {
      name: '__component:running-custom-actions',
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
