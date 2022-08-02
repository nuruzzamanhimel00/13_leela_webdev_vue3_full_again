const app = Vue.createApp({
    data(){
        return {
           count:1,
           name: '',
           lname:'',
           confirmName: ''
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
        setName(event, lastName){
            this.name = event.target.value + " "+ lastName;
        },
        submitForm(){
            alert('form submitted');
        },
        confirmOurName(event){
            this.confirmName = event.target.value;
        }
    },
});
app.mount('#app');
  