<template>
  <div>
        <h2>FUll name: {{ fullName }} </h2>
        <input type="text" @input="changeFirstName($event)"> &nbsp;
        <input type="text" @input="changeLastName($event)"> ;
        <br>
      Channel name is : {{ channelName }}
      <h1>User Details:</h1>
      <p>name: {{userDetais.name}}</p>
      <p>age: {{userDetais.age}}</p>
     <button @click.prevent="onChangeName">Change name</button>
    
   
  </div>
</template>

<script>

import {ref, reactive, isRef, isReactive, computed } from 'vue'


export default {

    setup(){
        let name = ref("Md Nuruzzaman Himel");
        let firstName = ref('');
        let lastName = ref('');

        // let userDetais = ref({
        //     name: 'Himel',
        //     age: 30
        // });
        let userDetais = reactive({
            name: 'Himel',
            age: 30
        });
        
        const fullName = computed(()=>{
            return firstName.value+ ' '+lastName.value;
        });


        function changeFirstName(event){
            // console.log(firstName, event)
            firstName.value = event.target.value;
        }
        function changeLastName(event){
            // console.log(lastName, event);
            lastName.value = event.target.value;
        }

        console.log(isRef(name));
        console.log(isReactive(userDetais));

        function onChangeName(){
            userDetais.name = "Modified name Himel"; 
        }

    
        return {
            channelName: name,
            userDetais,
            onChangeName,
            changeFirstName,
            changeLastName,
            fullName
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
