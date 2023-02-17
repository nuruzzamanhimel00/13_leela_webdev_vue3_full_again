<template>
  <div>
      Channel name is : {{ channelName }}
      <h1>User Details:</h1>
      <p>name: {{userDetais.name}}</p>
      <p>age: {{userDetais.age}}</p>
   
  </div>
</template>

<script>

// import {ref} from 'vue'
import {ref, reactive} from 'vue'

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

        setTimeout(()=>{
            console.log('settime out in setup console llog');
            name.value= 'himel';

            console.log(userDetais);
            
            // userDetais.value.name = "modified Nuruzzaman himel";
            // userDetais.value.age = 100;

            userDetais.name = "modified Nuruzzaman himel";
            userDetais.age = 100;

        },3000);
    
        return {
            channelName: name,
            userDetais: userDetais
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
