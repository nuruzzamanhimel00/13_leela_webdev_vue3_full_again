<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h1>Login: </h1>
                </div>
                <form @submit.prevent="onLoginSubmit()">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" class="form-control" v-model="form.email" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div class="error" v-if="errors.email" >{{errors.email}}</div>
                       
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1">
                        <div class="error" v-if="errors.password" >{{errors.password}}</div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import SignupValidation from '../../services/SignupValidation.js'

export default {
    data(){
        return{
            form:{
                email:'',
                password:'',
            },
            errors:[],
        }
    },
    methods:{
        onLoginSubmit(){
            //email and password validation
            let validaiton = new SignupValidation(this.form.email, this.form.password);
            this.errors = validaiton.chcekValidation();
            if(this.errors.length > 0){
                return false;
            }
            // console.log(this.errors);
        }
    }
    
}
</script>

<style scoped>
.error{
    color:red;
}
</style>