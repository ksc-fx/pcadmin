<template>
<<<<<<< HEAD
<div>
    按钮按钮
    <div>
        按钮
        <!-- <Btn>默认</Btn>
=======
    <div class="demo">
        <div class="demo-case">
            <Demo></Demo>
        </div>
>>>>>>> github/change-webpack

        <div class="demo-code" ref='code'>
            <pre><code class="lang-html">{{Code}}</code></pre>
        </div>

        <div class="markdown-body demo-md" v-html="Md" ref='md'></div>

<<<<<<< HEAD
        <Btn type="success">Danger</Btn>

        <Btn type="warning">Danger</Btn>

        <Btn type="danger">Danger</Btn> -->
        <div>
    <btn @click="buttonClick" params="paramsstring">默认按钮</btn>
    <btn @click="buttonClick" :params="msg" type="primary">主要按钮</btn>
    <btn @click="buttonClick" type="text">文字按钮</btn>

    <btn @click="buttonClick" :radius="false" color="green">绿色</btn>
    <btn @click="buttonClick" color="blue">蓝色</btn>
    <btn @click="buttonClick" color="red">红色</btn>
    <btn @click="buttonClick" color="orange">橘色</btn>
    <btn @click="buttonClick" color="orange" :disabled="true">橘色</btn>

    <btn @click="buttonClick" type="primary" color="green">绿色</btn>
    <btn @click="buttonClick" type="primary" color="blue">蓝色</btn>
    <btn @click="buttonClick" type="primary" color="red">红色</btn>
    <btn @click="buttonClick" type="primary" color="orange">橘色</btn>
    <btn @click="buttonClick" type="primary" color="orange" :disabled="true">橘色</btn>

    <btn @click="buttonClick" type="text" color="green">绿色</btn>
    <btn @click="buttonClick" type="text" color="blue">蓝色</btn>
    <btn @click="buttonClick" type="text" color="red">红色</btn>
    <btn @click="buttonClick" type="text" color="orange" :disabled="true">橘色</btn>
    

    <btn @click="buttonClick" :disabled="true">主要按钮</btn>
    <btn @click="buttonClick" type="primary" :disabled="true">主要按钮</btn>
    <btn @click="buttonClick" type="text" :disabled="true">文字按钮</btn>

  </div>
=======
>>>>>>> github/change-webpack
    </div>
</template>
<style lang="less">
.demo{
    .demo-md,.demo-code,.demo-case{
        padding:15px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 10px;
    }
}
</style>
<script>
<<<<<<< HEAD
// import Btn from 'pcadmin-button'
import Btn from 'pcadmin-button';
console.log(Btn);
=======
import Demo, {} from 'pcadmin-button/demo/index.vue';
import Code from 'pcadmin-button/demo/index.code';
import Md from 'pcadmin-button/README.md';
require('highlight.js/styles/default.css');

var lazymodule = (module) => () => import(`${module}/demo/index.vue`);

>>>>>>> github/change-webpack
export default{
    data () {
        return {
            Md,
            Code
        };
    },
    mounted () {
        window.hljs.highlightBlock(this.$refs.code);
        window.hljs.highlightBlock(this.$refs.md);
    },
<<<<<<< HEAD
    methods:{
        buttonClick(event) {
            console.log('点击按钮');
            alert('点击按钮');
        }
    },
    components:{
        Btn
=======
    methods: {

    },
    components: {
        Demo
>>>>>>> github/change-webpack
    }
};
</script>
