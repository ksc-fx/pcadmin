<template>
  <section class="app-navbar animated slideInDown">
    <nprogress></nprogress>        
    <slot></slot>
  </section>
</template>

<style lang="less" scoped>
@import "../../assets/css/index";
.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: @maxZindex;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  background: #fff;
  height: @navbarHeight;
}
</style>

<script>
import Nprogress from './Nprogress';
export default {
    components: {
        Nprogress
    }
};
</script>
