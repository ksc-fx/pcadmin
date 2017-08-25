<template>
    <div class="demo-wrapper">
        <button-el @click="onClick">打开提示框</button-el>
        <dialog-ele title="测试标题" :isShow.sync="isShow" >
            <div slot="body">测试内容</div>
            <div slot="footer">
                <button-el type="primary" color="orange" @click.stop.prevent="onConfirm">确认</button-el> <button-el  @click.stop.prevent="onCancel">取消</button-el>
            </div>
        </dialog-ele>
    </div>
</template>

<style lang="less">
    .demo-wrapper{
        width:800px;
        height:600px;
    }
</style>

<script>

    import buttonEl from 'pcadmin-button';
    import dialogEle from "pcadmin-dialog";

    export default {
        data(){
            return {
                isShow : false
            }
        },
        mounted(){

        },
        methods: {

            onClick(){
                this.isShow =  true;
            },
            onConfirm(){
                console.log('onConfirm');
                this.isShow =  false;

            },
            onCancel(){
                console.log('on cancel....');
                this.isShow =  false;
            }
        },
        components: {
            buttonEl,
            dialogEle
        }
    }
</script>

