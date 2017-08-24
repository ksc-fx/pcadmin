<template>
    <div class="demo">
        <div class="demo">
            <BtnDemo></BtnDemo>
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
import BtnDemo, {} from 'pcadmin-button/demo/index.vue';
import BtnDemoText from 'pcadmin-button/demo/index.text';
import BtnMd from 'pcadmin-button/README.md';
export default{
    data () {
        return {
            msg: BtnMd,
            text: BtnDemoText
        };
    },
    mounted () {
        window.hljs.initHighlightingOnLoad();
    },
    methods: {

    },
    components: {
        BtnDemo
    }
};
</script>
