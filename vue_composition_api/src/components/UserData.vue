<template>
    <div>
         <h1>User Details:</h1>
        <!-- <p>name: {{userDetais.name}}</p>
        <p>age: {{userDetais.age}}</p> -->
        <p>name: {{ user.name }}</p>
        <p>age :  {{ user.age  }} </p>
        <p><i>{{ fullDetails }}</i></p>
     <button @click.prevent="onChangeName">Change name</button>
    </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name:"UserData",
    props:{
        userDetais:{
            required: true
        }
    },
    setup(props){
        const user  = reactive(props.userDetais);

        function onChangeName(){
            user.name = " modified name is Himel";
        }

        const fullDetails = computed(()=>{
            return 'Full DEetails Name='+user.name+' And Age= '+user.age
        });
        console.log(user);
        return {
            user,
            onChangeName,
            fullDetails
        }
        
    }
}
</script>