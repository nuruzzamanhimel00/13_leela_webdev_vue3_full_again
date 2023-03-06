
import { createStore } from 'vuex'

    // Create a new store instance.
    const store = createStore({
        modules:{

        },
        state () {
            return {
                count: 10
            }
        },
        getters:{
            counter(state){
                return state.count;
            }
        },
        mutations: {
            setCounterIncrement (state, payload) {
            state.count  = state.count + payload;
            },
            setCounterDecrement (state, payload) {
            state.count  = state.count - payload;
            }
        },
        actions:{
            increment(context, data){
                context.commit('setCounterIncrement', data);
            },
            decrement(context, data){
                context.commit('setCounterDecrement', data);
            },
        }
    });

export default store;