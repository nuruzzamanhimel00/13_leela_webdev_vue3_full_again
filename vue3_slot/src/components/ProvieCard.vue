<template>
    <div>
        <div class="card">
            <div class="card-header" v-if="$slots.header">
                <slot name="header">
                    <div>
                        <!-- <h1>This is default header</h1> -->
                    </div>
                </slot>
            </div>
            <div class="card-body">
                <slot >
                    <h3>This is default body</h3>
                </slot>
            </div>
            <div class="card-footer">
                <slot name="footer">
                    <h4>This is default footer</h4>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$slots)
    },
}
</script>