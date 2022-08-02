const app = Vue.createApp({
    data(){
        return {
           count:1,
           name: '',
           lname:'',

        }
    },
    computed:{
        //computed property
        fullName(){
            console.log("Executing full name");
            return this.name + " " + "web dev";
        }
    },
    methods: {
        outputFullname(){
            console.log("Executing full name");
            return this.name + " " + "web dev";
        },
        increment(){
            console.log("increment");
            this.count = this.count + 1;
        },
        decrement(){
            this.count = this.count - 1;
        },
        setName(event){
            this.name = event.target.value ;
        },
        submitForm(){
            alert('form submitted');
        },
        
    },
});
app.mount('#app');
  