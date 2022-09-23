<template>
    <div>
        <select v-bind="$attrs">
            <option value="">select</option>
            <option value="1">1</option>
        </select>
        <div v-bind="$attrs"></div>
        <div v-bind="$attrs"></div>
    </div>
        
    
</template>

<script>
export default {
    inheritAttrs:false,
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.$attrs);
    },
}
</script>