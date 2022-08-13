
import { createStore } from 'vuex'

const store = createStore({
    state : {
      count: 20,
      todos:[
        { id:1, text: 'text number 1 ', done: true },
        { id:2, text: 'text number 2 ', done: true },
        { id:3, text: 'text number 3 ', done: false },
        { id:4, text: 'text number 4 ', done: true },
        { id:5, text: 'text number 5 ', done: false },
      ],
      seletedTodo:{}
    },
    getters:{
        getCcountResult(state){
            return state.count;
        },
        getTodoLists(state){
            return state.todos;
        },

        // 76.76. Calling Getters inside another Getter Methods. Pass arguments to getters, Vuex - Vue js _ Vue3.
        getDoneTodoLists(state){
          return state.todos.filter( doneData => doneData.done == true );
      },
        doneTodolistCount(state, getters){
            // return state.todos.filter( doneData => doneData.done == true ).length;
            return getters.getDoneTodoLists.length;
        },

        getSelectedTodo(state){
          return state.seletedTodo;
        }
    },
    mutations: {
     increment(state,payload){
        // state.count = state.count + payload;
        state.count = state.count + payload.value;
     },
     SELECT_TODOLIST_BYID(state, payload){
      let seletedTodo = state.todos.find( todoData => todoData.id ==  payload );
      state.seletedTodo = {...seletedTodo};
      // console.log( state.seletedTodo);
     }
    },
    actions:{
      async increment(context, payload){
        console.log(context);
        context.commit('increment', payload);
      }
    }
  });

  export default store;