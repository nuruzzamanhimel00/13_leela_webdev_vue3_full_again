<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" active-class="active" class="nav-link">Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'userDetails'}" active-class="active" class="nav-link">Users</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'userCreate'}" active-class="active" class="nav-link">User Create</router-link>
                    </li>
                
                </ul>
                
            </div>
            </nav>
    </div>
</template>

<style scoped>
    .exact-active{
        background: green;
        color: #fff !important;
        font-weight: bold;
    }
</style>