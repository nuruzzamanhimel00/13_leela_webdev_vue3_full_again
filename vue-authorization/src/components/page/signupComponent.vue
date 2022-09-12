<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    <h1>Signup:</h1>
                </div>
                <div class="alert alert-danger" v-if="error">
                    {{ error }}
                </div>
                <div class="alert alert-success" v-if="actionStatus">
                    Sign up Successfully
                </div>
                <form @submit.prevent="onSingupSubmit()">
                 <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" v-model="form.name" id="exampleInputname1" aria-describedby="nameHelp">
                       
                    </div>
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
import {mapActions, mapMutations, mapState} from 'vuex'
import { LOADING_SPINING_SHOW_MUTATION, SIGNUP_ACTION} from '../../store/storeconstants.js'
export default {
    data(){
        return{
            form:{
                email:'',
                name:'',
                password:'',
            },
            errors:[],
            error:'',
        }
    },
    // beforeRouteEnter(_, _1 ,next){
    //     console.log('before route enter');
    //     next(vm => {
    //          console.log(vm.$store.state.auth);
    //     })
        
    // },
    // beforeRouteLeave(){
    //     console.log('before route leave');
    //     console.log(this.$store.state.auth);
    // },
    computed:{
        ...mapState('auth',{
            actionStatus: (state) => state.status
        })
    },
    methods:{
        ...mapActions('auth',{
            signup_action: SIGNUP_ACTION
        }),
        ...mapMutations({
            showLoading: LOADING_SPINING_SHOW_MUTATION,
        }),
        async onSingupSubmit(){
            this.error = "";
            //email and password validation
            let validaiton = new SignupValidation(this.form.email, this.form.password);
            this.errors = validaiton.chcekValidation();
            // if(this.errors.length > 0){
            //     return false;
            // }

            if('email' in this.errors || 'password' in this.errors){
                // console.log(this.errors);
                return false;
            }

            this.showLoading(true);

            await this.signup_action({
               name: this.form.name,
               email: this.form.email,
               password: this.form.password 
            }).catch(error =>{
                this.error = error;
                this.showLoading(false);
            });

            // console.log(this.errors);
            this.showLoading(false);
        }
    }
    
}
</script>

<style scoped>
.error{
    color:red;
}
</style>