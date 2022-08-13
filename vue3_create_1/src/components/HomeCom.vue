<template>
    <div>
    <h1>{{ getCcountResult }}</h1>
    <a href="" class="btn btn-warning btn-sm" v-on:click.prevent="onCountIncrement()" >Count Increment</a>
    <hr>
    <p>To do list done cout: ( {{ doneTodolistCount }} )</p>
    <hr>
    <todolist-comp> </todolist-comp>
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
const TodolistComp = defineAsyncComponent(() =>
  import('./TodolistComp.vue')
)

export default {
    methods:{
        goToThePost(){
            this.$router.push({name: 'userDetails',query:{id:1} });
        },
        onCountIncrement(){
            // this.$store.state.count++;
            // this.$store.commit('increment',5);
            // this.$store.commit('increment',{value:5});

            this.$store.dispatch('increment',{value:5});
        }
    },
    computed:{
        ...mapGetters(['getCcountResult','doneTodolistCount'])
    },
    components:{
        CountComp,
        TodolistComp,
    }
}
</script>