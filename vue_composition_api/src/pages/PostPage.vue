<template>
    <div>
        <h2>Post page:-</h2>
        <h3>
        Params id: {{ id }}
        </h3>
        <button @click="goTOPostHandler">GO to Himel Post</button>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
export default {
    name:"PostPage",
    setup () {
        const route = useRoute()
        const router = useRouter()
        let id = ref('');

        id.value =route.params.id;

        function goTOPostHandler(){
            router.push({ name: 'PostPage',params:{id:"Himel"}});
            // id.value = "Himel";
        }
        // console.log('route =',route.params);

         // fetch the user information when params change
        watch(
        () => route.params.id,
        async newId => {
                id.value  = newId
            }
        )
        
        return {
            id,
            goTOPostHandler
        }
    }
}
</script>

<style lang="scss" scoped>

</style>