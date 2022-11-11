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
        <ul v-if="todoList !== null">
        <li>{{todoList.id}}</li>
        <li>{{todoList.text}}</li>
        <li>{{todoList.done}}</li>
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
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
    data(){
        return{
           todoList: null,
        }
    },
      computed:{
        // ...mapState({
        //     getTodoLists: state => state.todos.todos
        // }),
        //or
         ...mapState('todos',{
            getTodoLists: state => state.todos
        }),
        ...mapGetters('todos',['doneTodolistCount','getDoneTodoLists','getSelectedTodo']),
        ...mapGetters('todos',{
            todoListById: 'getTodoListById'
        }),
    },
    methods:{
        ...mapMutations('todos',['SELECT_TODOLIST_BYID']),
        onSelectToDoList(id){
            // this.SELECT_TODOLIST_BYID(id);
            
            this.todoList = this.todoListById(id);
        }
    }
}
</script>