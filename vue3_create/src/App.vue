<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Posts</h2>
          <compSinglePost />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import compSinglePost from "./components/SinglePost.vue"

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
    },
  
  }
</script>

<style>

</style>
