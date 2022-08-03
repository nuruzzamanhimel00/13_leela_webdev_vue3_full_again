<template>
    <div>
        <h3>{{ post.title }}</h3>
        <p> {{ post.description }} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post:{
                title:"title number one",
                description: 'title number onetitle number onetitle number onetitle number onetitle number onetitle number onetitle number one'
            }
        }
    }
}
</script>