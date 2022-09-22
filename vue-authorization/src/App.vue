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
import {ACCESS_TOKEN_WISE_AUTHORIZATION_CHECK} from './store/storeconstants.js'

import navComp from './components/TheNavbarComponent.vue'
import theLoader from './components/TheLoaderComponent.vue'
import {mapState, mapActions} from 'vuex'

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
  },
  mounted(){
    this.accessTokenWiseAuthorizaion();
  },
  methods:{
    ...mapActions('auth',{
      accessTokenWiseAuthorizaion: ACCESS_TOKEN_WISE_AUTHORIZATION_CHECK
    })
  }
}
</script>

<style>

</style>
