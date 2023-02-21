<template>
    <div>
        <h1>ArticlePage</h1>
        <h3>Article id: {{id}}</h3>
        <button @click="goToArticle">Go to article himel</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:"ArticlePage",
    props:['id'],
    setup () {
        const router = useRouter()
        function goToArticle(){
            router.push({ name: 'ArticlePage',params:{id:"Himel"}});
        }

        return {
            goToArticle
        }
    }
}
</script>

<style lang="scss" scoped>

</style>