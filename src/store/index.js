import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [ {time: new Date().toLocaleTimeString(),
                  descripion: `Don't forget to eat`,
                  date: new Date().toLocaleDateString(),
                  author: 'Added by: ' + 'Daniel',},
                  {time: new Date().toLocaleTimeString(),
                    descripion: `Make my roomates laugh`,
                    date: new Date().toLocaleDateString(),
                    author: 'Added by: ' + 'Alex',},
                    {time: new Date().toLocaleTimeString(),
                      descripion: `Go surf`,
                      date: new Date().toLocaleDateString(),
                      author: 'Added by: ' + 'Coco',},
                      {time: new Date().toLocaleTimeString(),
                        descripion: `Go to sleep`,
                        date: new Date().toLocaleDateString(),
                        author: 'Added by: ' + 'Sofia',},
          ],
    doneTodos: []
  },
  mutations: {
    addTodoToList(state, todo) {
      state.todoList.unshift(todo)
    },
    removeTodoFromList(state, todo) {
      state.todoList = state.todoList.filter(t => t !== todo)
    },
    todoDone(state, todo){
      console.log('Todo is sooo done', state, todo)
      let indexOfTodo = state.todoList.indexOf(todo)
      state.todoList.push(...state.todoList.splice(indexOfTodo, 1))
    },
    moveUpTheList(state, todo) {
      console.log('this todo is sooo important', todo)
      let indexOfTodo = state.todoList.indexOf(todo)
      if(indexOfTodo === 0){
        return
      } else {
        state.todoList.splice(indexOfTodo, 1)
        state.todoList.splice(indexOfTodo -1, 0, todo)
      }
    },
    moveDownTheList(state, todo) {
      console.log('this todo is so done', todo)
      let indexOfTodo = state.todoList.indexOf(todo)
      state.todoList.splice(indexOfTodo, 1)
      state.todoList.splice(indexOfTodo +1, 0, todo)
    }
  },
  actions: {
  },
  modules: {
  }
})
