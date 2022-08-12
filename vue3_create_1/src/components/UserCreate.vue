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
            <button type="submit" class="btn btn-primary">Submit</button>
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
            hi:"Hello himel"
        }
    },
      beforeRouteEnter(to, from){
        console.log(this.hi);
        console.log('beforeRouteEnter:-',to, from);
    },
    beforeRouteUpdate(to, from){
        console.log('beforeRouteUpdate:-',to, from);
    },
    beforeRouteLeave(to, from){
        console.log('beforeRouteLeave:-',to, from);
    },
    methods: {
        onUserCreate(){
            let data = {
                'name' : this.name,
                'email' : this.email,
                'password' : this.password
            };
         UserService.UserCreate(data);
            this.$router.push({ name: 'userDetails' });
        }
    },
}
</script>