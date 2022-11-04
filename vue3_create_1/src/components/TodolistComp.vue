<template>
    <div>
    <h1>To do list ( {{ doneTodolistCount }} )</h1>
        <ul>
            <li v-for="(value, key) in getTodoLists" :key="key">
               <a href=""
                @click.prevent="onSelectToDoList(value.id)"
                >
                     {{ value.text }} {{ value.done ? 'Done' : 'Not Done'  }}
               </a>
            </li>
        </ul>
        <hr>

        <h2>Selectd TO list</h2>
        <!-- <ul v-if="getSelectedTodo !== null">
        <li>{{getSelectedTodo.id}}</li>
        <li>{{getSelectedTodo.text}}</li>
        <li>{{getSelectedTodo.done}}</li>
        </ul> -->
   
        <ul v-if="id !== null">
        <li>{{getSelectedTodoList.id}}</li>
        <li>{{getSelectedTodoList.text}}</li>
        <li>{{getSelectedTodoList.done}}</li>
        </ul>
        <br>
        <hr>
    <h1>All Done To do list ( {{ getDoneTodoLists.length }} )</h1>
        <ul>
            <li v-for="(value, key) in getDoneTodoLists" :key="key">
                {{ value.text }} {{ value.done ? 'Done' : 'Not Done'  }}
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    data(){
        return{
            id: null,
        }
    },
      computed:{
        ...mapGetters(['getTodoLists','doneTodolistCount','getDoneTodoLists','getSelectedTodo']),
        getSelectedTodoList(){
            return this.$store.getters.getTodoById(this.id);
        }
    },
    methods:{
        ...mapMutations(['SELECT_TODOLIST_BYID']),
        onSelectToDoList(id){
            // this.SELECT_TODOLIST_BYID(id);
            this.id = id;
            // console.log(id);
        }
    }
}
</script>