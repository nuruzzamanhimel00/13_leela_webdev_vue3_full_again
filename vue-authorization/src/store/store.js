
import { createStore } from 'vuex'
import authModule from '../store/modules/auth/index.js'
import { LOADING_SPINING_SHOW_MUTATION } from './storeconstants.js';
// Create a new store instance.
const store = createStore({
  modules:{
    auth: authModule
  },
  state : {
    showLoading: false
  },
  getters:{

  },
  mutations: {
    [LOADING_SPINING_SHOW_MUTATION](state, payload){
      state.showLoading = payload;
    }
  },
  actions:{

  }
});
export default store;
