<template>
    <div>
        <button-ele @click="buttonClick" params="paramsstring">默认按钮</button-ele>
        <button-ele @click="buttonClick" :params="msg" type="primary">主要按钮</button-ele>
        <button-ele @click="buttonClick" type="text">文字按钮</button-ele>

        <button-ele @click="buttonClick" :radius="false" color="green">绿色</button-ele>
        <button-ele @click="buttonClick" color="blue">蓝色</button-ele>
        <button-ele @click="buttonClick" color="red">红色</button-ele>
        <button-ele @click="buttonClick" color="orange">橘色</button-ele>
        <button-ele @click="buttonClick" color="orange" :disabled="true">橘色</button-ele>

        <button-ele @click="buttonClick" type="primary" color="green">绿色</button-ele>
        <button-ele @click="buttonClick" type="primary" color="blue">蓝色</button-ele>
        <button-ele @click="buttonClick" type="primary" color="red">红色</button-ele>
        <button-ele @click="buttonClick" type="primary" color="orange">橘色</button-ele>
        <button-ele @click="buttonClick" type="primary" color="orange" :disabled="true">橘色</button-ele>

        <button-ele @click="buttonClick" type="text" color="green">绿色</button-ele>
        <button-ele @click="buttonClick" type="text" color="blue">蓝色</button-ele>
        <button-ele @click="buttonClick" type="text" color="red">红色</button-ele>
        <button-ele @click="buttonClick" type="text" color="orange" :disabled="true">橘色</button-ele>


        <button-ele @click="buttonClick" :disabled="true">主要按钮</button-ele>
        <button-ele @click="buttonClick" type="primary" :disabled="true">主要按钮</button-ele>
        <button-ele @click="buttonClick" type="text" :disabled="true">文字按钮</button-ele>

    </div>
</template>
<style>

</style>
<script>
import Btn, {} from '../../../components/button/';

import buttonEle from 'pcadmin-button';

export default{
    data () {
        return {
            msg: 'button hello vue'
        };
    },
    methods: {
        buttonClick (event) {
            console.log('点击按钮');
        }
    },
    components: {
        Btn,
        buttonEle
    }
};
</script>
