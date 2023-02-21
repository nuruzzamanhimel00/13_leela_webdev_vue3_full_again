<template>
    <div>
        <h1>AboutComponent </h1>
        <button @click="goToHandler">Go to Home page</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:'AboutComponent',
    setup () {
        const router = useRouter()
        function goToHandler(){
            router.push({name: 'HomeComponent'});
        }
        return {
            goToHandler
        }
    }
}
</script>

<style lang="scss" scoped>

</style>