<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="my-2">
              <select-component
                data-status="1"
                id="selectbox"
                @change="selectChange"
              > </select-component>
          </div>
            <h2>Posts</h2>
            <!-- ################################################## -->
            <div class="my-3 p-2" style="background-color:green;">
              <p>App/Main component:- {{ user }}</p>
              <a href="" @click.prevent="changeUser()" >change user name</a>
            </div>
             <!-- ################################################## -->
            <div v-for="(post, key) in posts"  :key="key">
            <br>
              <a href="" @click.prevent="onChangeTitle(key)" >Change Title App vue parent</a>

              <compSinglePost :post-data="post" :user="user" :isActive="1" @title-change="onTitleChange($event)" />

            </div>
        </div>
        <div class="col-md-4">
          <h2>Latest Post</h2>
          <br>
          <ul class="list-group">
            <li class="list-group-item" v-for="(value, key) in posts" :key="key"  >
                {{ value.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue'

  import compSinglePost from "./components/SinglePost.vue"
  import SelectComponent from './components/SelectComponent.vue'
  export default{
    data(){
      return{
        posts:[
          {
            id:1,
            title:"title number one",
            description: 'title number onetitle number onetitle number onetitle number onetitle number onetitle number onetitle number one'
          },
          {
            id:2,
            title:"title number two",
            description: 'title number twotitle number twotitle number twotitle number twotitle number twotitle number twotitle number two'
          }
        ],
        user: "Md. Nuruzzaman Himel"
      }
    },
    provide(){
      return {
        user: computed(() => this.user),
       
      }
    },
    components:{
      compSinglePost,
      SelectComponent
    },
    methods: {
     changeUser(){
        this.user = "Update Md Nurezzaman Himel";
      },
      onChangeTitle(key){
        this.posts[key].title = 'change title in the parent';
      },
      selectChange(event){
        console.log(event.target.value);
      },
      onTitleChange(event){
        let index = this.posts.findIndex( post => post.id == event.id );
        this.posts[index].title = event.title;
        // console.log(event, key);
      }
    },
  
  }
</script>

<style>

</style>
