<template>
    <div class="postUser p-2" >
        <h3>Single post component: {{ user.value }}</h3>
        <a href="" class="btn btn-danger" @click.prevent="changeUserCustomEvent('Updated Himel From Chilld Comp')" >change user forn single comp</a>
    </div>

</template>

<script>
export default {
   inject: ['user','changeUserCustomEvent'],
   mounted() {
    // console.log(this.user.value);
   },
}
</script>

<style scoped>
    .postUser{
        border: 2px solid #fff;
    }
</style>