
import { createStore } from 'vuex'
import counterModule from '@/store/Modules/counter.modules.js'
// import todosModule from '@/store/Modules/todos/todos.modules.js'
import todosModule from '@/store/Modules/todos'

const store = createStore({
    modules:{
      counter: counterModule,
      todos: todosModule,
    },
    state : {
  
    },
    getters:{
       
        
    },
    mutations: {
     
    
    },
    actions:{
      

    }
  });

  export default store;