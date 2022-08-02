const app = Vue.createApp({
    data(){
        return {
           count:1,
        }
    },
    methods: {
        increment(){
            console.log("hell");
            this.count = this.count + 1;
        },
        decrement(){
            this.count = this.count - 1;
        }
    },
});
app.mount('#app');
  