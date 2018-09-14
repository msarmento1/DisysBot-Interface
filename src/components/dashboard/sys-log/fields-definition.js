export default {
  tableFields: [
    {
      name: 'level',
      title: '',
      callback: 'getEquivalentLogLevel'
    },
    {
      name: 'date',
      title: 'date',
      callback: 'formatDate|DD/MM/YYYY, HH:mm:ss.SSS Z'
    },
    {
      name: 'log',
      title: 'log'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
