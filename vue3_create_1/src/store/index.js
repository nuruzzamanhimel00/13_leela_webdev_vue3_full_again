
import { createStore } from 'vuex'

const store = createStore({
    state : {
      count: 20,
      todos:[
        { id:1, text: 'text number 1 ', done: true },
        { id:2, text: 'text number 2 ', done: false },
        { id:3, text: 'text number 3 ', done: false },
        { id:4, text: 'text number 4 ', done: true },
        { id:5, text: 'text number 5 ', done: false },
      ]
    },
    getters:{
        getCcountResult(state){
            return state.count;
        },
        getTodoLists(state){
            return state.todos;
        },
        doneTodolistCount(state){
            return state.todos.filter( doneData => doneData.done == true ).length;
        }
    },
    mutations: {
     increment(state,payload){
        // state.count = state.count + payload;
        state.count = state.count + payload.value;
     }
    },
    actions:{

    }
  });

  export default store;