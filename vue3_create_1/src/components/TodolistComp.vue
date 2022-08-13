<template>
    <div>
    <h1>To do list ( {{ doneTodolistCount }} )</h1>
        <ul>
            <li v-for="(value, key) in getTodoLists" :key="key">
                {{ value.text }} {{ value.done ? 'Done' : 'Not Done'  }}
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
      computed:{
        ...mapGetters(['getTodoLists','doneTodolistCount'])
    },
    methods:{
        // doneListCount(){
        //     return this.getTodoLists.filter( doneData => doneData.done == true ).length;
        // }
    }
}
</script>