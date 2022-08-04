<template>
    <div>
        <h3>{{ post.title }}</h3>
        <p> {{ post.description }} {{ isActive }} </p>
        <a href="" @click.prevent="changeTitle()" >Change Title</a>
    </div>
</template>

<script>
export default {
    props:['data','isActive'],
    data() {
        return {
            post: this.data,
        }
    },
    methods: {
        changeTitle(){
            this.post.title = "change the title";
        }
    },
}
</script>

<style scoped>
    h3{
        color:red;
    }
</style>