<template>
    <div>
        <h1>Count Component </h1>
        <h4> <i>{{ getCcountResult}}</i> </h4>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    
    data() {
        return {
            
        }
    },
     computed:{
        ...mapGetters('counter',['getCcountResult'])
    },
}
</script>