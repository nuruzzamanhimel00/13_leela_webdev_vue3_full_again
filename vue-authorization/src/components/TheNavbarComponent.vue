<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link  :to="{name: 'loginComp'}" class="nav-link" href="#">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link  :to="{name: 'signupComp'}" class="nav-link" href="#">Signup</router-link>
                        </li>
                    </ul>
                
                </div>
            </nav>
    </div>
</template>
<script>
export default {
    name:'TheNavbarComponent',
    data() {
        return {
            
        }
    },
}
</script>