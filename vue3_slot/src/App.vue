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

     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonComponent
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
