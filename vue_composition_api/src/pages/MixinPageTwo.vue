<template>
    <div  class="text-center">
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
        name:"MixinPageTwo",
        mixins:[CounterMixin],
      
    }
</script>

<style scoped>

</style>