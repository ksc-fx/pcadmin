<template>
<div class="home">
    HomeHomeHomeHomeHomeHomeHome
    --{{msg}}--
    <test class="test"></test>
</div>
</template>
<style lang="less">
.home{
    .test{
        height: 1000px;
    }
}
</style>
<script>
import Test from './test.vue'
export default{
    data(){
        return{
            msg:'hello vue'
        }
    },
    components:{
        Test
    }
}
</script>
