<template>
  <div>
    <div class="container">
      <user-create> </user-create>
    </div>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'

const UserCreate = defineAsyncComponent(() =>
  import('./components/UserCreate.vue')
)

export default {
  name:'App',
  data() {
    return {
 
    }
  },
  components:{
  
    UserCreate
  },
  methods: { 
  },
}
</script>

<style>

</style>
