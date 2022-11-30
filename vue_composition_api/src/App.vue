<template>
  <div>
      Channel name is : {{ channelName }}
  </div>
</template>

<script>

import {ref} from 'vue'

export default {

    setup(){
        let name = ref("Md Nuruzzaman Himel");

        setTimeout(()=>{
            console.log('settime out in setup console llog');
            name.value= 'himel'
        },3000);
        
        return {
            channelName: name
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
