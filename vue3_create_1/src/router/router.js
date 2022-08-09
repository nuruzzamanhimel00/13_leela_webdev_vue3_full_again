
import HomeComp from '../components/HomeCom.vue'
import UserCreateComp from '../components/UserCreate.vue'
import UserDetailsComp from '../components/UserDetails.vue'

const routes = [
    { 
        path: '/', 
        component: HomeComp, 
        name: 'home' 
    },
    {
        path: '/user-create', 
        component: UserCreateComp, 
        name: 'userCreate' 
    },
    { 
        path: '/user-details', 
        component: UserDetailsComp, 
        name: 'userDetails' 
    },
]

export default routes;