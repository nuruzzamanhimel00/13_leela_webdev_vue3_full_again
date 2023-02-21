<template>
    <div>
        <h1>Life Cycle</h1>
        <p>Name: {{ user.name }}</p>
        <button @click="user.name = 'Modified lifecycle name'">life cycle upt</button>
    </div>
</template>

<script>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import { reactive } from '@vue/reactivity';
// import { onRenderTracked } from '@vue/runtime-core';
// import { onRenderTriggered } from '@vue/runtime-core';
export default {
    setup () {

        const user = reactive({
            name: 'himel'
        });
        
        onBeforeMount(()=>{
            // console.log('onBeforeMount funciton call')
        });

        onMounted(()=>{
            // console.log('onMounted function call');
        });

        onBeforeUpdate(()=>{
            // console.log("onBeforeUpdate function call");
        });

        onUpdated(()=>{
            // console.log("onUpdated function call");
        });

        onBeforeUnmount(()=>{
            // console.log("onBeforeUnmount function call");
        });

        onUnmounted(()=>{
            // console.log("onUnmounted function call");
        });

        // onRenderTracked((e)=>{
        //     // console.log('onRenderTracked',e);
        // });

        // onRenderTriggered((e)=>{
        //     // console.log('onRenderTriggered',e);
        // })

        return {
            user
        }
    }
}
</script>

<style lang="scss" scoped>

</style>