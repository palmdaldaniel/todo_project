import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [ {title: 'New Todo 1',
                  descripion: 'Love vuex',
                  date: '2020.01.26'},
                  {title: 'New Todo 2',
                  descripion: 'Love vuex',
                  date: '2020.01.26'},
                  {title: 'New Todo 3',
                  descripion: 'Love vuex',
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
    }
  },
  actions: {
  },
  modules: {
  }
})
