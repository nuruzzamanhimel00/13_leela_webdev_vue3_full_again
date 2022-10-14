<template>
    <div>
    <h1>Create User:--</h1>
        <form @submit.prevent="onUserCreate()">
            <div class="form-group">
                <label for="nameId">Name</label>
                <input type="text" class="form-control" id="nameId" v-model="name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button v-if="loadSubmit" type="submit" class="btn btn-primary" :class="{'button_disabled':loadSubmit}">Loading...</button>
            <button v-else type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import {UserService} from '../Services/UserService'

export default {
    name:'UserCreate',
    data() {
        return {
            name:'',
            email:'',
            password:'',
            loadSubmit:false,
        }
    },
    methods: {
       
        onUserCreate(){
            this.loadSubmit = true;
            let data = {
                'name' : this.name,
                'email' : this.email,
                'password' : this.password
            };
    
         UserService.UserCreate(data).then(()=>{
            this.loadSubmit = false;
            this.formReset();
         }).catch((error)=>{
            alert(error);
         });
        },
        formReset(){
            this.name=null;
            this.email=null;
            this. password=null;
        }
    },
}
</script>
<style scoped>
.button_disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>