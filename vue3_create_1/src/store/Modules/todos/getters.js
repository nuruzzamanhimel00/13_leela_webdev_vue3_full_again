export default {
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
};