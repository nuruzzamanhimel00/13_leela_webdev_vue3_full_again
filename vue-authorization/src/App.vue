<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
       
        <div class="col-md-12">
         <nav-comp> </nav-comp>
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

export default {
  name: 'App',
  components: {
    navComp
  }
}
</script>

<style>

</style>
