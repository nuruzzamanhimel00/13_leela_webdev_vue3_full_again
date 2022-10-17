<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <user-create @getAllUserDetailsFlug="ongetAllUserDetailsFlug($event)"> </user-create>
        <br>
        <hr>
        <h1>Watcher Practice...</h1> <br>
        <input type="text" v-model="movie">
        <input type="text" v-model="movieInfo.title">
        <input type="text" v-model="movieInfo.actor">
        <button @click.prevent="onAddMovieList">Add Movie List</button>

      </div>
      <div class="col-md-6">
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
      movie:'Spiderman',
      movieInfo:{
        title:'',
        actor:'',
      },
      movieList:['superman','batman','antman'],
    }
  },
  components:{
  
    UserCreate,
    UserDetail

  },
  watch:{
    movie: {
      handler(newValue) {
         console.log(`Movie name is ${newValue}`);
      },
      // force eager callback execution
      immediate: true
    },
    movieInfo: {
      handler(newValue) {
         console.log(`movieInfo chnaage title is ${newValue.title} and actor is ${newValue.actor}` );
      },
      deep: true
    },
    movieList: {
      handler(newValue) {
         console.log(`movieInfo chnaage  is ${newValue}` );
      },
      deep: true
    },
  },
  methods: { 
    ongetAllUserDetailsFlug(event){
      this.getAllUserDetails = event;
    },
    onAddMovieList(){
      this.movieList.push('new man');
    }
  },
}
</script>

<style>

</style>
