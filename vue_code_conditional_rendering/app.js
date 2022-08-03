const app = Vue.createApp({
    data(){
        return {
            enteredHobbyValue:'',
            hobbies:[],
            userDetails:{
                firstName: "Nuruzzaman",
                lastName:"Himel",
                age:29,
                Home:"Khlna"
            }
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
  