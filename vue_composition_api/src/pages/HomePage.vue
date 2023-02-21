<template>
    <div>
        <h1> Home Component </h1>
           <button @click="goToHandler">Go to About page</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:"HomeComponent",
    setup () {
        const router = useRouter()
        function goToHandler(){
            router.push({name: 'AboutComponent'});
        }
        return {
            goToHandler
        }
    }
}
</script>

<style lang="scss" scoped>

</style>