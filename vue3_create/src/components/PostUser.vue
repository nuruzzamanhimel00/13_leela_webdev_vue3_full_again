<template>
    <div>
        <h3>Single post User component: {{ user.value }}</h3>
    </div>

</template>

<script>
export default {
   inject: ['user'],
   mounted() {
    console.log(this.user.value);
   },
}
</script>