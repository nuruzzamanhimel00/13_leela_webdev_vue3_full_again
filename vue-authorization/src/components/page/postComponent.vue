<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in fetchAllPost" :key="key">
                <th scope="row">{{key+1}}</th>
                <td>{{value.title}}</td>
                <td>{{value.description}}</td>
                <td>@mdo</td>
                </tr>
                
            </tbody>
            </table>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {FETCH_ALL_POST, GET_ALL_POST_ACTION} from '../../store/storeconstants.js'
export default {
    name:'postComponent',
    data(){
        return{

        }
    },
    created(){
        this.getAllPost();
    },
    computed:{
         ...mapGetters('post',{
            fetchAllPost: FETCH_ALL_POST
        }),
    },
    methods:{
       ...mapActions('post',{
            getAllPost: GET_ALL_POST_ACTION
        }),
    }
}
</script>
<style scoped>

</style>