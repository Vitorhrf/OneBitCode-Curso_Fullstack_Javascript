let lists = [
    { id: "1", listName: 'Lista 1', tasks: [{id: '1', task: 'Teste 1', completed: false}, {id: '2', task: 'Teste 2', completed: false}, {id: '3', task: 'Teste 3', completed: false}] },
    { id: "2", listName: 'Lista 2', tasks: [{id: '2', task: 'Teste 2', completed: false}] }
]

// List { id, listName, tasks[{id, task}] }

const listModel = {
  getAllLists() {
    return lists
  },

  getListById(id) {
    return lists.find(list => list.id === id)
  },

  createList(listName) {
    const list = {
      id: Date.now().toString(),
      listName: listName,
      tasks: []
    }
    return list
  },

  saveList(list) {
    lists.push(list)
  },

  deleteList(id) {
    lists = lists.filter(list => list.id !== id)
  },

  createTask(listID, taskName) {
    const task = {
      id: Date.now().toString(),
      task: taskName,
      completed: false
    }
    const list = this.getListById(listID)
    list.tasks.push(task)
    return list
  },

  completeTask(listID, taskID) {
    const list = this.getListById(listID)
    const task = list.tasks.find(task => task.id === taskID)
    task.completed = true
  }
}

module.exports = listModel