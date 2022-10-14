<template>
    <div>
        <h1>Get User Details</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, key) in userDetails" :key="key">
      <th scope="row">{{key+1}}</th>
      <td>{{value.name}}</td>
      <td>{{value.email}}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '../Helpers/Api'

export default {
    props:['userCreatedFlug'],
    data() {
        return {
            userDetails:[]
        }
    },
    created(){
        this.onGetUsers();
    },
    watch:{
        userCreatedFlug(){
            if(this.userCreatedFlug ==true){
                this.onGetUsers();
                this.$emit('getAllUserDetailsFlug',!this.userCreatedFlug);
            }
        }
    },
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
 
        }
    },
}
</script>
