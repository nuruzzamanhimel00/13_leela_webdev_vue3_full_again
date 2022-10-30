
import HomeComp from '../components/HomeCom.vue'
import UserCreateComp from '../components/UserCreate.vue'
import UserDetailsComp from '../components/UserDetails.vue'
import UserShowComp from '../components/UserShow.vue'
import SingleUserDetailsComp from '../components/SingleUserDetails.vue'
import RedirectComp from '../components/RedirectCom.vue'
import NotFound from '../components/notFound.vue'
import NotUserComp from '../components/NotUserComp.vue'
import UserCreate from '@/components/footer/userCreate.vue'
import DefaultFooter from '@/components/footer/defaultFooter.vue'
import NavSection from '@/components/NavSection.vue'

const routes = [
    { 
        path: '/', 
        // component: HomeComp, 
        name: 'home' ,
        components: { 
            default: HomeComp,
            footer: DefaultFooter,
            navigation: NavSection
        },

    },
    {
        path: '/user-create', 
        // component: UserCreateComp, 
        name: 'userCreate' ,
        components: { default: UserCreateComp, footer: UserCreate,navigation: NavSection },
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