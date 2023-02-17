<template>
  <div>
      Channel name is : {{ channelName }}
      <h1>User Details:</h1>
      <!-- <p>name: {{userDetais.name}}</p>
      <p>age: {{userDetais.age}}</p> -->
      <p>name: {{name}}</p>
      <p>age: {{age}}</p>
   
  </div>
</template>

<script>

import {ref, reactive, isRef, isReactive, toRefs } from 'vue'


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

        setTimeout(()=>{
            // console.log('settime out in setup console llog');
            name.value= 'himel';
            userDetais.name = "modified Nuruzzaman himel";
            userDetais.age = 100;

        },3000);

        let userRefs = toRefs(userDetais);
    
        return {
            channelName: name,
            name: userRefs.name,
            age: userRefs.age
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
