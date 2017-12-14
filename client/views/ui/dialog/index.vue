<template>
    <div class="demo">
        <div class="demo-case">
            <Demo></Demo>
        </div>

        <div class="demo-code" ref='code'>
            <pre><code class="lang-html">{{Code}}</code></pre>
        </div>

        <div class="markdown-body demo-md" v-html="Md" ref='md'></div>

    </div>
</template>
<style lang="less">
.demo {
    .demo-md,
    .demo-code,
    .demo-case {
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 10px;
    }
}
</style>
<script>
import Demo from 'pcadmin-dialog/demo/index.vue';
import Code from 'pcadmin-dialog/demo/index.code';
import Md from 'pcadmin-dialog/README.md';

export default {
    data() {
        return {
            Md,
            Code
        };
    },
    mounted() {
        window.hljs.highlightBlock(this.$refs.code);
        window.hljs.highlightBlock(this.$refs.md);
    },
    methods: {},
    components: {
        Demo
    }
};
</script>