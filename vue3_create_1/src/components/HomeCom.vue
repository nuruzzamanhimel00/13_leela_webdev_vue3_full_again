<template>
    <div>
    <h1>{{ getCcountResult }}</h1>
    <a href="" class="btn btn-warning btn-sm" v-on:click.prevent="onCountIncrement()" >Count Increment</a>
    <br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus veniam voluptate ducimus. Sapiente dolor quia, iste voluptatem blanditiis iusto laborum minus earum libero excepturi cum mollitia omnis aliquid voluptates commodi.
        <a href="" class="btn btn-success" @click.prevent="goToThePost()">
            Go to the Post
        </a>
        <br>
        <hr>
        <CountComp> </CountComp>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

import { defineAsyncComponent } from 'vue'

// simple usage
const CountComp = defineAsyncComponent(() =>
  import('./CountComp.vue')
)

export default {
    methods:{
        goToThePost(){
            this.$router.push({name: 'userDetails',query:{id:1} });
        },
        onCountIncrement(){
            this.$store.state.count++;
        }
    },
    computed:{
        ...mapGetters(['getCcountResult'])
    },
    components:{
        CountComp
    }
}
</script>