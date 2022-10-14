<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <user-create @getAllUserDetailsFlug="ongetAllUserDetailsFlug($event)"> </user-create>
      </div>
      <div class="col-md-4">
        <user-detail :user-created-flug="getAllUserDetails"  
         @getAllUserDetailsFlug="ongetAllUserDetailsFlug($event)"
        > </user-detail>
       
      </div>
      <div class="col-md-4"></div>
    </div>
      
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

const UserCreate = defineAsyncComponent(() =>
  import('./components/UserCreate.vue')
)
const UserDetail = defineAsyncComponent(() =>
  import('./components/UserDetails.vue')
)
export default {
  name:'App',
  data() {
    return {
      getAllUserDetails:false,
    }
  },
  components:{
  
    UserCreate,
    UserDetail

  },
  methods: { 
    ongetAllUserDetailsFlug(event){
      this.getAllUserDetails = event;
    }
  },
}
</script>

<style>

</style>
