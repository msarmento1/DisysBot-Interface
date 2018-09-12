export default {
  tableFields: [
    {
      name: 'name',
      title: 'name',
      sortField: 'name'
    },
    {
      name: 'startTime',
      title: 'start time',
      callback: 'formatDate|DD/MM/YYYY, h:mm:ss a'
    },
    {
      name: 'endTime',
      title: 'end time',
      callback: 'formatDate|DD/MM/YYYY, h:mm:ss a'
    },
    {
      name: '__component:finished-custom-actions',
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
