
import { createStore } from 'vuex'
import authModule from '../store/modules/auth/index.js'
// Create a new store instance.
const store = createStore({
  modules:{
    auth: authModule
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
