<template>
<div>
    HomeHomeHomeHomeHomeHomeHome
    --{{msg}}--
    <test></test>
    子路由
    <router-view></router-view>
</div>
</template>
<style>

</style>
<script>
import Test from './test.vue'
export default{
    data(){
        return{
            msg:'ui hello vue'
        }
    },
    components:{
        Test
    }
}
</script>
