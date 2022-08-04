<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
        <div class="my-2">
            <select-component
              data-status="1"
              id="selectbox"
              @change="selectChange"
            > </select-component>
        </div>
          <h2>Posts</h2>
          <div v-for="(post, key) in posts"  :key="key">
          <br>
            <a href="" @click.prevent="onChangeTitle(key)" >Change Title App vue parent</a>

            <compSinglePost :post-data="post" :isActive="1" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import compSinglePost from "./components/SinglePost.vue"
  import SelectComponent from './components/SelectComponent.vue'
  export default{
    data(){
      return{
        posts:[
          {
            title:"title number one",
            description: 'title number onetitle number onetitle number onetitle number onetitle number onetitle number onetitle number one'
          },
          {
            title:"title number two",
            description: 'title number twotitle number twotitle number twotitle number twotitle number twotitle number twotitle number two'
          }
        ]
      }
    },
    components:{
      compSinglePost,
      SelectComponent
    },
    methods: {
      onChangeTitle(key){
        this.posts[key].title = 'change title in the parent';
      },
      selectChange(event){
        console.log(event.target.value);
      }
    },
  
  }
</script>

<style>

</style>
