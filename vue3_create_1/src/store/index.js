
import { createStore } from 'vuex'
import counterModule from '@/store/Modules/counter.modules.js'
import todosModule from '@/store/Modules/todos.modules.js'

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