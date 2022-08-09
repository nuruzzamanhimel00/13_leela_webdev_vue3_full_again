<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <nav-section> </nav-section>
       <router-view></router-view> 
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem, perferendis, facilis magni esse amet cupiditate, laboriosam dignissimos sit excepturi architecto dolore minima. Cum id, doloremque iusto quae nulla nam?
      </div>
     
    </div>
      
    </div>
  </div>
</template>

<script>

import NavSection from '@/components/NavSection.vue'

export default {
  name:'App',
  data() {
    return {
 
    }
  },
  components:{
    NavSection
    

  },
  methods: { 

  },
}
</script>

<style>

</style>
