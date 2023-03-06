<template>
    <div>
        <mixin-page-one/>
        <hr>
        <mixin-page-two/>
    </div>
</template>

<script>

import MixinPageOne from './MixinPageOne.vue'
import MixinPageTwo from './MixinPageTwo.vue'

    export default {
        name:'MixinPage',
        data(){
            return {

            }
        },
        components:{
            MixinPageOne,
            MixinPageTwo,
        }
    }
</script>

<style lang="scss" scoped>

</style>