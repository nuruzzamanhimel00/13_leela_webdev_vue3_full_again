<template>
    <div id="app">
    <h1>Random User</h1>
      <div
         class="user"
         v-for="(user, index) in users"
         :key="index"
      >
      <!-- <div class="user-avatar">
        <img :src="user.picture.large" />
      </div> -->
      <div class="user-details">
        <h2 class="user-name">
          {{ user.name }}

        </h2>
        <ul>
          <li><strong>email:</strong> {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'loadMore',
    data(){
        return{
            users: [],
            number: 0,
        }
    },
    mounted(){
       
        this.getInitialUsers();
        this.getNextUser();
        
    },
    methods:{
       getInitialUsers() {
            console.log('getInitialUsers');
            axios.get(`http://127.0.0.1:8000/api/user-load-more/${this.number}`).then((response) => {
                if(response.data.status == 'success'){
                     this.usersPush(response.data.data);
                    
                    this.number++;
                }
                
            });
        },
        getNextUser() {
            window.onscroll = () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if (bottomOfWindow) {
                    console.log('getNextUser');
                    axios.get(`http://127.0.0.1:8000/api/user-load-more/${this.number}`).then((response) => {
                        if(response.data.status == 'success'){
                            this.usersPush(response.data.data);
                            this.number++;
                        }
                        
                    });
                }
            }
        },
        usersPush(data){
            for(let value of data){
                this.users.push(value);
            }
        }
    }
}
</script>
<style scoped>
.user {
  display: flex;
  background: #ccc;
  border-radius: 1em;
  margin: 1em auto;
}

.user-avatar {
  padding: 1em;
}

.user-avatar img {
  display: block;
  width: 100%;
  min-width: 64px;
  height: auto;
  border-radius: 50%;
}

.user-details {
  padding: 1em;
}

.user-name {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 900;
}
</style>