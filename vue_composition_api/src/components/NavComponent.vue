<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="{name: 'HomeComponent'}">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name: 'HomeComponent'}" >Home </router-link>
                    
                </li>
                <li class="nav-item active">
                   <router-link class="nav-link" :to="{name: 'AboutComponent'}" >About </router-link>
                    
                </li>
                <li class="nav-item active">
                   <router-link class="nav-link" :to="{name: 'PostPage', params: { id: 1 } }" >Post </router-link>
                    
                </li>
                <li class="nav-item active">
                   <router-link class="nav-link" :to="{name: 'ArticlePage', params: { id: 1 } }" >Article </router-link>
                    
                </li>
                <li class="nav-item active">
                   <router-link class="nav-link" :to="{name: 'CounterPage' }" >Counter </router-link>
                    
                </li>
                </ul>
            </div>
            </nav>
    </div>
</template>

<script>
export default {
    name:"NavComponent",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>