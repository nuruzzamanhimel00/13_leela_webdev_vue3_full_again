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
      <div class="row">
        <div class="col-md-4">
          <provide-card>
             <template #header>
                <h1>Here might be a page title</h1>
              </template>

              <template #default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
              </template>

              <template #footer>
                <p>Here's some contact info</p>
              </template>
           </provide-card>
        </div>
        <div class="col-md-4">
          <provide-card>
          

              <template #default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
              </template>

              <template #footer>
                <p>Here's some contact info</p>
              </template>
           </provide-card>
        </div>
      </div>

     
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ButtonComponent from './components/ButtonComponent.vue'
import provideCard from '@/components/ProvieCard.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ButtonComponent,
    provideCard
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
