<template>
    <div>
    <h1>Edit User: ({{ $route.params.id }})--</h1>
        <form @submit.prevent="onUserUpdate()">
            <div class="form-group">
                <label for="nameId">Name</label>
                <input type="text" class="form-control" id="nameId" v-model="name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            &nbsp; 
            <router-link class="btn btn-primary"  :to="{ name: 'userDetails'}" >GO back Users List </router-link>
        </form>
    </div>
</template>
<script>
import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '../Helpers/Api'
import {UserService} from '../Services/UserService'

export default {
    name:'UserCreate',
    data() {
        return {
            name:'',
            email:'',
            userId:this.$route.params.id,
        }
    },
    created(){
       this.showUserByUserId(this.userId);
    },
    methods: {
        showUserByUserId(userId){

            axios.get(apiRoutes.SHOW_SINGLE_USER+`/${userId}`,  {
                headers: ApiHeader.getHeaderWithoutAuth()
            })
            .then(response => {
                this.name = response.data.data.name;
                this.email = response.data.data.email;
                this.name = response.data.data.name;
            })
            .catch(error => console.log("error = ",error))
        },
        onUserUpdate(){
             let data = {
                'id' : this.userId,
                'name' : this.name,
                'email' : this.email,           
                };
            UserService.UserUpdate(data);
            this.$router.push({ name: 'userDetails' });
        }
    },
}
</script>