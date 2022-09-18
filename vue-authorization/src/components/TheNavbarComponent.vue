<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" v-if="isUserAuthnticatedCheck">
                            <router-link class="nav-link " :to="{ name:'hompComp' }">Home </router-link>
                        </li>
                        <li class="nav-item" v-if="!isUserAuthnticatedCheck">
                            <router-link  :to="{name: 'loginComp'}" class="nav-link" href="#">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!isUserAuthnticatedCheck">
                            <router-link  :to="{name: 'signupComp'}" class="nav-link" href="#">Signup</router-link>
                        </li>
                        <li class="nav-item" v-if="isUserAuthnticatedCheck">
                            <router-link  :to="{name: 'postComp'}" class="nav-link" href="#">Posts</router-link>
                        </li>
                        <li class="nav-item" v-if="isUserAuthnticatedCheck">
                            <a class="btn btn-primany" href="" @click.prevent="onLogout()">logout</a>
                        </li>
                    </ul>
                
                </div>
            </nav>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_IS_AUTHONTICATED_CHECK } from '../store/storeconstants'
export default {
    name:'TheNavbarComponent',
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters('auth',{
            isUserAuthnticatedCheck: USER_IS_AUTHONTICATED_CHECK
        })
    },
    methods:{
        ...mapActions('auth',['onLogout']),
    }
}
</script>