<template>
    <div class="text-center">
        <h1 class="text-center">Counter Page</h1>
        <h2>
            Counter: {{ counter }}
        </h2>
        <button @click="IncrementHandler">Increment</button>
    </div>
</template>

<script>
   import CounterMixin from '../Mixins/Counter.mixins.js'
    export default {
        name:"MixinPageOne",
         mixins:[CounterMixin],
        mounted(){
            console.log('component mounted log');
        }
    }
</script>

<style scoped>

</style>