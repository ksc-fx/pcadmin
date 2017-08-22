<template>
<div>
    按钮按钮
    <div>
        按钮
        <!-- <Btn>默认</Btn>

        <Btn type="primary" disabled>默认</Btn>

        <Btn type="info">Dashed</Btn>

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
    </div>

</div>
</template>
<style>

</style>
<script>
// import Btn from 'pcadmin-button'
import Btn from 'pcadmin-button';
console.log(Btn);
export default{
    data(){
        return{
            msg:'button hello vue'
        }
    },
    methods:{
        buttonClick(event) {
            console.log('点击按钮');
            alert('点击按钮');
        }
    },
    components:{
        Btn
    }
}
</script>
