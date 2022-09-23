
import HomeComp from '../components/HomeCom.vue'
import UserCreateComp from '../components/UserCreate.vue'
import UserDetailsComp from '../components/UserDetails.vue'
import UserShowComp from '../components/UserShow.vue'
import SingleUserDetailsComp from '../components/SingleUserDetails.vue'
import RedirectComp from '../components/RedirectCom.vue'
import NotFound from '../components/notFound.vue'
import NotUserComp from '../components/NotUserComp.vue'

const routes = [
    { 
        path: '/', 
        component: HomeComp, 
        name: 'home' 
    },
    {
        path: '/user-create', 
        component: UserCreateComp, 
        name: 'userCreate' ,
        beforeEnter: (to, from) => {
            console.log("before enter", to, from)
        // // reject the navigation
        // return false
        },
    },
    {
        path: '/user-redirect', 
        component: RedirectComp, 
        name: 'RedirectComp',
        redirect:'/'
    },
    { 
        path: '/user-details/', 
        component: UserDetailsComp, 
        name: 'userDetails',
        redirect:{  name: 'NotUsser'},
        children:[
            {
                path: '', 
                component: NotUserComp, 
                name:'NotUsser',
            },
            {
                path: ':id', 
                component: SingleUserDetailsComp, 
                name:'singleUserDetails',
                props:true
            }
        ] 
    },
    { 
        path: '/user-details/:id', 
        component: UserShowComp, 
        name: 'userShow' 
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export default routes;