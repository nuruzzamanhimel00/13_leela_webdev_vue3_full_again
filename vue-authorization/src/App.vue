<template>
  <div>
    <div class="container">
   
      <div class="row justify-content-center">
        <div class="col-md-12">
         <nav-comp> </nav-comp>
          <the-loader v-if="theLoading"> </the-loader>
        </div>
        <div class="col-md-6">
            <router-view></router-view>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navComp from './components/TheNavbarComponent.vue'
import theLoader from './components/TheLoaderComponent.vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  computed:{
    ...mapState({
      theLoading: (state) => state.showLoading 
    })
  },
  components: {
    navComp,
    theLoader
  }
}
</script>

<style>

</style>
