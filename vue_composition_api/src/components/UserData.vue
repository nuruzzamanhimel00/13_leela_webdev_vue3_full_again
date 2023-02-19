<template>
    <div>
         <h1>User Details:</h1>
        <!-- <p>name: {{userDetais.name}}</p>
        <p>age: {{userDetais.age}}</p> -->
        <slot name="header"></slot>
        <p>name: {{ user.name }}</p>
        <p>age :  {{user.age}} </p>
        <p><i>full Details:- {{ fullDetails }} </i></p>
     <button @click.prevent="onChangeName">Change name</button>
     <hr>
     <input type="text" ref="ageref">
     <button @click.prevent="onChangeAgeHandler" >change age</button> 
     <br>
     <button @click.prevent="onChangeFNHandler">Change First name</button>
     <slot></slot>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import {computed, ref} from 'vue'

export default {
    name:"UserData",
    props:{
        userDetais:{
            required: true
        }
    },
   
    setup(props, context){
        let ageref = ref(null);
       const user = reactive(props.userDetais);

       console.log(context, context.attrs.class);

       function onChangeFNHandler(){
            context.emit('first-name-change','first name modified...')
        }

        function onChangeName(){
            user.name = "Modified name";
            user.age = 50;
        }

        function onChangeAgeHandler(){
            console.log(ageref.value);
            user.age = ageref.value.value;
        }

        

        const fullDetails = computed(()=>{
            return   'Fill Details is ='+user.name+" age ="+user.age;
        });

    //    console.log(name);
       return {
        user,
        onChangeName,
        fullDetails,
        ageref,
        onChangeAgeHandler,
        onChangeFNHandler
       }
    }
    // setup(props){
    //     const user  = reactive(props.userDetais);

    //     function onChangeName(){
    //         user.name = " modified name is Himel";
    //     }

    //     const fullDetails = computed(()=>{
    //         return 'Full DEetails Name='+user.name+' And Age= '+user.age
    //     });
    //     console.log(user);
    //     return {
    //         user,
    //         onChangeName,
    //         fullDetails
    //     }
        
    // }
}
</script>