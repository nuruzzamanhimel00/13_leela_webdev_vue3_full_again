<template>
    <div>
        <h1>Get User Edit</h1>
        <div class="row">
            <div class="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, key) in userDetails" :key="key">
                        <th scope="row">{{key+1}}</th>
                        <td>{{value.name}}</td>
                        <td>{{value.email}} {{ value.id }}</td>
                        <td>
                            <router-link :to="{name: 'userShow', params:{id:value.id} }" class="btn btn-success">Edit</router-link>
                            <a href="" class="btn btn-danger" @click.prevent="onDeleteUser(value.id)" >Delete</a>
                            <router-link :to="{name:'singleUserDetails',  params:{id:value.id} }" class="btn btn-info"  >Show User</router-link>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <router-view> </router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '../Helpers/Api'

export default {
    data() {
        return {
            userDetails:[],
            usernName:'',
            userEmail:'',
            hi:"Hello himel"
        }
    },
    created(){
        this.onGetUsers();
    },
    // beforeRouteEnter(to, from, next){
    //     next( vm => {
    //         // access to component public instance via `vm`
    //         console.log(vm.hi);
    //     });
    //     // console.log(this.hi);
    //     console.log('beforeRouteEnter:-',to, from);
    // },
    // beforeRouteUpdate(to, from){
    //     console.log('beforeRouteUpdate:-',to, from);
    // },
    // beforeRouteLeave(to, from){
    //     console.log('beforeRouteLeave:-',to, from);
    // },
    methods: {
        onGetUsers(){
             axios.get(apiRoutes.GET_ALL_USERS,  {
                headers: ApiHeader.getHeaderWithoutAuth()
            })
            .then(response => {
                // console.log(response.data);
                this.makeUserDetails(response.data);
            })
            .catch(error => console.log("error = ",error))
  
        },
        makeUserDetails(usersDetails){
            this.userDetails = [];
            for (let key in usersDetails[0].data) {
                this.userDetails.push(usersDetails[0].data[key]);
            }
 
        },
        onDeleteUser(id){
             axios.delete(apiRoutes.SINGLE_USER+`/${id}`,  {
                headers: ApiHeader.getHeaderWithoutAuth()
            })
            .then(response => {
                alert(response.data.message);
                 this.onGetUsers();
            //    alert(response.data.message);
              
            })
            .catch(error => console.log("error = ",error))
        },
       
    },
}
</script>
