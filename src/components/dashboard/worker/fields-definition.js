export default {
  tableFields: [
    {
      name: 'state',
      title: 'state',
      callback: 'getEquivalentState'
    },
    {
      name: 'alias',
      title: 'alias',
    },
    {
      name: 'address',
      title: 'address'
    },
    {
      name: 'port',
      title: 'port'
    },
    {
      name: 'runningInstances',
      title: 'running instances'
    },
    {
      name: 'performance.level',
      title: 'performance'
    },
    {
      name: 'resource.cpu',
      title: 'cpu being used',
      callback: 'normalizeResource'
    },
    {
      name: 'resource.memory',
      title: 'memory being used',
      callback: 'normalizeResource'
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
