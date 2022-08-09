<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-md-4">
        <user-create> </user-create>
      </div>
      <div class="col-md-4">
        <user-detail> </user-detail>
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
 
    }
  },
  components:{
  
    UserCreate,
    UserDetail

  },
  methods: { 
  },
}
</script>

<style>

</style>
