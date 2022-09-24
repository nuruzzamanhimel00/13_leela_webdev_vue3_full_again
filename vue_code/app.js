const app = Vue.createApp({
    data(){
        return {
           count:1,
           name: '',
           lname:'',
        //    fullName:''

        }
    },
    watch:{
        count(newValue){
            if(newValue > 5){
                this.count = 0;
            }
        }
        // name(){
        //     this.fullName = this.name + " " + this.lname;
        // },
        // lname(){
        //     this.fullName = this.name + " " + this.lname;
        // },
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
  