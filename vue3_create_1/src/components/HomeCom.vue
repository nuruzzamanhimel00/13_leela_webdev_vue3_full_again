<template>
    <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus veniam voluptate ducimus. Sapiente dolor quia, iste voluptatem blanditiis iusto laborum minus earum libero excepturi cum mollitia omnis aliquid voluptates commodi.
        <a href="" class="btn btn-success" @click.prevent="goToThePost()">
            Go to the Post
        </a>
    </div>
</template>
<script>
export default {
    methods:{
        goToThePost(){
            this.$router.push({name: 'userDetails',query:{id:1} });
        }
    }
}
</script>