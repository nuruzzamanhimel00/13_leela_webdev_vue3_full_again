const app = Vue.createApp({
    data(){
        return {
           count:1,
           name: '',
           lname:'',

        }
    },
    methods: {
        increment(){
            console.log("hell");
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
        outputFullname(){
            console.log("Executing full name");
            return this.name;
        }
    },
});
app.mount('#app');
  