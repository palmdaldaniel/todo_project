import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [ {title: 'New Todo 1',
                  descripion: 'Love vuex',
                  date: '2020.01.26'},
                  {title: 'New Todo 2',
                  descripion: 'VG here we go',
                  date: '2020.01.26'},
                  {title: 'New Todo 3',
                  descripion: 'Jag hoppas du flyttar upp nu',
                  date: '2020.01.26'},
                  {title: 'New Todo 4',
                  descripion: 'Love vuex',
                  date: '2020.01.26'},
      
    ],
  },
  mutations: {
    addTodoToList(state, todo) {
      state.todoList.unshift(todo)
    },
    removeTodoFromList(state, todo) {
      state.todoList = state.todoList.filter(t => t !== todo)
    },
    moveUpTheList(state, todo) {
      console.log('this todo is so done', todo)
      let indexOfTodo = state.todoList.indexOf(todo)
      state.todoList.splice(indexOfTodo,1)
      state.todoList.splice(indexOfTodo-1, 0, todo)
    },
    moveDownTheList(state, todo) {
      console.log('this todo is so done', todo)
      let indexOfTodo = state.todoList.indexOf(todo)
      state.todoList.splice(indexOfTodo,1)
      state.todoList.splice(indexOfTodo+1, 0, todo)
    },
  },
  actions: {
  },
  modules: {
  }
})
