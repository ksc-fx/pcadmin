<template>
    <button type="button" class="pc-btn button" _ :class="['is-' + this.type]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'default'
        }
    }
};
</script>

<style lang="less">
</style>
