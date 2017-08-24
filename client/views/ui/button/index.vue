<template>
    <div class="demo">
        <div class="demo">
            <Demo></Demo>
        </div>

        <div class="demo-text">
            <pre><code class="html">{{text}}</code></pre>
        </div>

        <div class="markdown-body" v-html="msg"></div>

    </div>
</template>
<style lang="less">
.demo{
    .markdown-body,.demo-text,.demo{
        padding:15px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 10px;
    }
}
</style>
<script>
import Demo, {} from 'pcadmin-button/demo/index.vue';
import DemoText from 'pcadmin-button/demo/index.code';
import Md from 'pcadmin-button/README.md';

export default{
    data () {
        return {
            msg: Md,
            text: DemoText
        };
    },
    mounted () {
        window.hljs.initHighlightingOnLoad();
    },
    methods: {

    },
    components: {
        Demo
    }
};
</script>
