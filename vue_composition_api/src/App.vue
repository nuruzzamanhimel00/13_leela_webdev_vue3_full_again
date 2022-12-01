<template>
  <div>
      Channel name is : {{ channelName }}
      <h1>User Details:</h1>
      <p>name: {{userDetais.name}}</p>
      <p>age: {{userDetais.age}}</p>
     <button @click.prevent="onChangeName">Change name</button>
    
   
  </div>
</template>

<script>

import {ref, reactive, isRef, isReactive } from 'vue'


export default {

    setup(){
        let name = ref("Md Nuruzzaman Himel");

        // let userDetais = ref({
        //     name: 'Himel',
        //     age: 30
        // });
        let userDetais = reactive({
            name: 'Himel',
            age: 30
        });

        console.log(isRef(name));
        console.log(isReactive(userDetais));

        function onChangeName(){
            userDetais.name = "Modified name Himel"; 
        }

    
        return {
            channelName: name,
            userDetais,
            onChangeName
        }
    }


//   name: 'App',
//   data(){
//     return{
//       channelName : 'Nuruzzaman Himel'
//     }
//   },
//   mounted(){
//     setTimeout(()=>{
//       this.channelName = 'Himel'
//     },3000)
//   },
//   components: {
    
//   }
}
</script>

<style>

</style>
