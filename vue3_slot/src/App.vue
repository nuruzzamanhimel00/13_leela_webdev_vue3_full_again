<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  
      <button-component> 
        <i class="fas fa-user"></i> &nbsp; Hello User;
      </button-component>
      <button-component> 
        <i class="fas fa-user-plus"></i> &nbsp; Hello Profile;
      </button-component>
      <br>
      <hr>
      <profile-card> 
          <template v-slot:header>
            This is Header Section
          </template>
          <template v-slot:content>
            This is content Section
          </template>
          <template v-slot:footer>
            This is footer Section
          </template>
      </profile-card>
     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import ProfileCard from './components/ProfileCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonComponent,
    ProfileCard
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
