import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addTodoToList(state, todo) {
      state.todoList.unshift(todo)
    }
  },
  actions: {
  },
  modules: {
  }
})
