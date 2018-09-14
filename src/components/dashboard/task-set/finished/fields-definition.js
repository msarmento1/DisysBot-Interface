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
      sortField: 'startTime',
      callback: 'formatDate|DD/MM/YYYY, HH:mm:ss.SSS Z'
    },
    {
      name: 'endTime',
      title: 'end time',
      sortField: 'endTime',
      callback: 'formatDate|DD/MM/YYYY, HH:mm:ss.SSS Z'
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
