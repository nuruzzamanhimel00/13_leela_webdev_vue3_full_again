import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations:mutations,
    actions:actions,
}