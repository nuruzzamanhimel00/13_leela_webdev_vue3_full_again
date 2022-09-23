import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'

const todosModule= {
    namespaced:true,
    state:state,
    getters:getters,
    mutations:mutations,
    actions:{
        
    }
};

export default todosModule;