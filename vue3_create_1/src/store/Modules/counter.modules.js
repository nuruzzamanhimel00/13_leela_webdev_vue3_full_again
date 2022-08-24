const counterModule = {
    namespaced:true,
    state:{
        count: 20,
    },
    getters:{
        getCcountResult(state){
            return state.count;
        },
    },
    mutations:{
        increment(state,payload){
            // state.count = state.count + payload;
            state.count = state.count + payload.value;
         },
    },
    actions:{
        async increment(context, payload){
            // console.log(context);
            context.commit('increment', payload);
          },
          actionA(context){
            // return new Promise((resolve, reject) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                context.commit('increment', {value:3});
                resolve("Promise success response return");
              }, 2000);
            });
          },
          actionB(context){
            // 78.78. Dispatching Actions within another actions in Vuex - Vue js _ Vue 3.
            context.dispatch('actionA').then( (response) =>{
              console.log(response);
              console.log('action B calling actionA');
            } );
          }
    }
};

export default counterModule;