export default {
  tableFields: [
    {
      name: 'level',
      title: '',
      callback: 'getEquivalentLogLevel'
    },
    {
      name: 'log',
      title: 'log'
    },
    {
      name: 'date',
      title: 'date',
      callback: 'formatDate|DD/MM/YYYY, hh:mm:ss a'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
