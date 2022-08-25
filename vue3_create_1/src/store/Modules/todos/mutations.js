export default {
    SELECT_TODOLIST_BYID(state, payload){
      let seletedTodo = state.todos.find( todoData => todoData.id ==  payload );
      state.seletedTodo = {...seletedTodo};
      // console.log( state.seletedTodo);
     }
  };