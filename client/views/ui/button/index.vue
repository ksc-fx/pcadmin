<template>
<div>
按钮按钮
<div>
    <Btn>默认</Btn>

    <Btn type="primary" disabled>禁用</Btn>

    <Btn type="info">info</Btn>

    <Btn type="success">success</Btn>

    <Btn type="warning">warning</Btn>

    <Btn type="danger">danger</Btn>
</div>
</div>
</template>
<style>

</style>
<script>
import Btn, {} from '../../../components/button/'
export default{
    data(){
        return{
            msg:'button hello vue'
        }
    },
    components:{
        Btn
    }
}
</script>
