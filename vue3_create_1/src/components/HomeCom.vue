<template>
    <div>
    <h1>Cpunter:--{{ getCcountResult }} -- {{ countValue }}</h1>
    <a href="" class="btn btn-warning btn-sm" v-on:click.prevent="onCountIncrement()" >Count Increment</a>
    &nbsp;
        <!-- <a href="" class="btn btn-warning btn-sm" v-on:click.prevent="onCountIncrementActionA()" >Count Action A Incsrement</a> -->
    <hr>
    <p>To do list done cout: ( {{ doneTodoCount }} )</p>
    <hr>
    <todolist-comp> </todolist-comp>
    <hr>
        <CountComp> </CountComp>
    </div>
</template>
<script>
import {mapGetters, mapActions, mapState} from 'vuex'

import { defineAsyncComponent } from 'vue'

// simple usage
const CountComp = defineAsyncComponent(() =>
  import('./CountComp.vue')
)
const TodolistComp = defineAsyncComponent(() =>
  import('./TodolistComp.vue')
)

export default {
       computed:{
        ...mapGetters('counter',['getCcountResult']),
        ...mapGetters('counter',{
            doneTodoCount:'doneTodolistCount'
        }),
        //  ...mapState({
        //     countValue: state => state.counter.count
        // }),
        // or
        ...mapState('counter',{
            countValue: state => state.count
        }),
    },
    methods:{
        ...mapActions('counter',{
            incrementValue:'increment'
        }),
        ...mapActions('counter',{
            incrementValue:'increment'
        }),
        goToThePost(){
            this.$router.push({name: 'userDetails',query:{id:1} });
        },
        onCountIncrement(){
            // this.$store.state.count++;
            // this.$store.commit('increment',5);
            // this.$store.commit('increment',{value:5});

            // this.$store.dispatch('increment',{value:5});

            this.incrementValue({value:5});
        },
        // onCountIncrementActionA(){
        //     // this.$store.dispatch('actionA').then( (response) => {
        //     //     console.log("response console");
        //     //     console.log(response);
        //     // } );
        //     this.$store.dispatch('actionB').then( (response) => {
        //         console.log("response console");
        //         console.log(response);
        //     } );
        // }
    },
 
    components:{
        CountComp,
        TodolistComp,
    }
}
</script>