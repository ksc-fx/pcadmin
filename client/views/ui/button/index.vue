<template>
<div>
    按钮按钮
    <div>
        <Btn>默认</Btn>

        <Btn type="primary" disabled>默认</Btn>

        <Btn type="info">Dashed</Btn>

        <Btn type="success">Danger</Btn>

        <Btn type="warning">Danger</Btn>

        <Btn type="danger">Danger</Btn>
    </div>

</div>
</template>
<style>

</style>
<script>
import Btn, {} from 'pcadmin-button'
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
