<template>
    <div>
    {{ $route.params.id }} -- {{ id }}
        <h1>User Info: </h1>
        <p>User Name: {{ usernName }} </p>
        <p>User Email: {{ userEmail }} </p>
    </div>
</template>

<script>
import axios from "axios";
import {apiRoutes} from '../Helpers/apiRoute.js'
import ApiHeader from '../Helpers/Api'

export default {
    props:['id'],
    data(){
        return{
             usernName:'',
            userEmail:'',
            userId: this.$route.params.id,
        }
    },
    mounted(){
        // this.ShowUser(this.userId);
    },
    watch:{
        // id(){
        //     this.ShowUser(this.id);
        // },
         id: {
            handler(newValue) {
                // this will be run immediately on component creation.
                this.ShowUser(newValue);
                console.log("newValue=",newValue);
            },
            // force eager callback execution
            immediate: true
        }
    },
    created(){
        // this.$watch(
        // () => this.$route.params,
        //     (toParams, previousParams) => {
        //         // react to route changes...
        //         console.log(toParams.id, previousParams);
        //         this.ShowUser(toParams.id);
        //     }
        // )
    },
    methods:{
         ShowUser(id){
             axios.get(apiRoutes.SHOW_SINGLE_USER+`/${id}`,  {
                headers: ApiHeader.getHeaderWithoutAuth()
            })
            .then(response => {
                this.usernName = response.data.data.name;
                this.userEmail = response.data.data.email;
            })
            .catch(error => console.log("error = ",error))
        }
    }
}
</script>