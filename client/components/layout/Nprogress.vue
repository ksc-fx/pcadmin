<template>
<div class="app-nprogress"></div>
</template>
<!--  因后期要对app-nprogress 操作， 所以无法使用scopd -->
<style lang="less">
@import "../../assets/css/index";
@import '~nprogress/nprogress.css';
.app-nprogress {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: @maxZindex*2;
    pointer-events: none;
    // 进度条
    .bar {
        height: 3px!important;
        background: @progressColor!important;
    }
    // 进度条最右进度
    .peg {
        box-shadow: 0 0 20px @progressColor, 0 0 10px @progressColor!important;
    }
    // 最右圈
    .spinner-icon {
        border-top-color: @progressColor!important;
        border-left-color: @progressColor!important;
    }
}
</style>

<script>
export default {
    components: {
    },
    props: {
    },
    methods: {
    }
};
</script>
