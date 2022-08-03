const app = Vue.createApp({
    data(){
        return {
            enteredHobbyValue:'',
            hobbies:[],
        }
    },
    computed:{
      
    },
    methods: {
        onHobbySubmit(){
            this.hobbies.push(this.enteredHobbyValue);
        }
    },
});
app.mount('#app');
  