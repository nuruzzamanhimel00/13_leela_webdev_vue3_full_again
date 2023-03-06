<template>
    <div>
        <h1 class="text-center">Counter Page</h1>
        <h3 class="text-center"><b>{{counter}}</b></h3>
        <div class="text-center my-2">
            <button @click.prevent="inrementHandler" class="btn btn-success mx-2">Counter ++</button>
        <button  @click.prevent="decrementHandler" class="btn btn-danger">Counter --</button>
        </div>
    </div>
</template>

<script>
import {  computed, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name:"CounterPage",
    setup () {
        const store = useStore()
        let counter = ref(store.getters.counter);

        counter.value = computed(()=>{
           return store.getters.counter;
        });

        function inrementHandler(){
            store.dispatch('increment',1);
        }
        function decrementHandler(){
            store.dispatch('decrement',1);
        }
        return {
            counter,
            inrementHandler,
            decrementHandler
        }
    }
}
</script>

<style  scoped>

</style>