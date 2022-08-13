
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
     increment(state,payload){
        // state.count = state.count + payload;
        state.count = state.count + payload.value;
     }
    },
    actions:{

    }
  });

  export default store;