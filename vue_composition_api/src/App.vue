<template>
  <div>
        <h2>FUll name: {{ fullName }} </h2>
        <input type="text" v-model="firstName" > &nbsp;
        <input type="text" v-model="lastName" > ;
        <br>
        <br>
        <h1>Age: {{ age }} </h1>
        <button @click="onUpdateAge">Update Age</button>
        <br>
       
        Channel name is : {{ channelName }}
        
        <user-data 
        :user-detais='userDetais'
         class="hi-himel"
         @firstNameChange="onFIrstNameChangeHandler"
          >
             <template v-slot:header>
               <h1><i>This is header sloat</i></h1>
            </template>
            <h1>This is default slot </h1>
        </user-data>


   
  </div>
</template>

<script>

import {ref, reactive, isRef, isReactive, computed, watch } from 'vue'
import UserData from './components/UserData.vue'

export default {
    components:{
        UserData
    },
    setup(){
        let name = ref("Md Nuruzzaman Himel");
        let firstName = ref('');
        let lastName = ref('');
        let age=ref(30);

        // let userDetais = ref({
        //     name: 'Himel',
        //     age: 30
        // });
        let userDetais = reactive({
            name: 'Himel',
            age: 30
        });

        function onFIrstNameChangeHandler(event){
            firstName.value = event;
            // console.log(event);
        }
        
        const fullName = computed(()=>{
            return firstName.value+ ' '+lastName.value;
        });
        //watch

        watch([age, firstName, fullName], (newValue, oldValue)=>{
            console.log(newValue, oldValue);
        })

        console.log(isRef(name));
        console.log(isReactive(userDetais));

        function onChangeName(){
            userDetais.name = "Modified name Himel"; 
        }

        function onUpdateAge(){
            age.value = 100
        }
    
        return {
            channelName: name,
            userDetais,
            onChangeName,
            fullName,
            firstName,
            lastName,
            age,
            onUpdateAge,
            onFIrstNameChangeHandler
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
