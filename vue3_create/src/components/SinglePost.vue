<template>
    <div :class="{'background-gray' : isActive }" class="p-2">
        <h3>{{ post.title }}</h3>
        <p> {{ post.description }} {{ isActive }} </p>
        <a href="" @click.prevent="changeTitle()" >Change Title</a>
    </div>
</template>

<script>
export default {
    // props:['postData','isActive'],
    props:{
        postData:{
            type: Object,
            required: true,
            default(){
                return {
                    title:"title number one test oneoneoneoneoneoneoneone",
                    description: 'this is desciption hereherehereherehere'
                }
            }
        },
        isActive:{
            type: Number,
            required: false,
            default: 1,
            validator(value) {
                return value == 1 || value == 2 ;
            }
        }
    },
    data() {
        return {
            post: this.postData,
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
    .background-gray{
        background-color: rgb(175, 169, 169);
    }
</style>