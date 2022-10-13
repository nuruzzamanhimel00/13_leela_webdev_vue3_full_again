<template>
    <div :class="{'background-gray' : isActive }" class="p-2">
        <post-user  />
        <h3>{{ post.title }}  </h3>
        <p> {{ post.description }} {{ isActive }} </p>
        <a href="" @click.prevent="changeTitle()" >Change Title</a>
    </div>
</template>

<script>

import PostUser from './PostUser.vue'

export default {
    // props:['postData','isActive'],
    emits:['title-change'],
    props:{
        postData:{
            type: Object,
            required: true,
            default: function(){
                return {
                    title:"title number one",
                    description: 'this is desciption here'
                }
            }
        },
        isActive:{
            type: Number,
            required: false,
            default: 1
        },
        user: String
    },
    data() {
        return {
            post: {...this.postData},
        }
    },
    methods: {
        changeTitle(){
            this.post.title = "change the title";
            this.$emit("title-change",this.post);
        }
    },
    components:{
        PostUser
    }
}
</script>

<style scoped>
    h3{
        color:red;
    }
    .background-gray{
        background-color: rgb(175, 169, 169);
    }
</style>