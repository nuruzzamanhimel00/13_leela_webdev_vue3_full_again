
import { createStore } from 'vuex'

const store = createStore({
    state : {
      count: 20
    },
    getters:{
        getCcountResult(state){
            return state.count;
        }
    },
    mutations: {
     
    },
    actions:{

    }
  });

  export default store;