<template>
  <aside class="app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    菜单栏 <br>
    <router-link v-for="(item,index) in $store.state.menus.items" v-if="item.path!='*'" :to="item.path" :index="index">
      {{item.name}}<br/>
    </router-link>
  </aside>
</template>

<script>

export default {
  components: {
  },

  props: {
    show: Boolean
  },

  data () {
    return {
      isReady: false
    }
  },

  mounted () {
  },
  methods: {

  },

  watch: {

  }

}
</script>

<style lang="less">
    @import "../../assets/css/index";
    .app-sidebar {
      position: fixed;
      top: @navbarHeight;
      left: 0;
      bottom: 0;
      width: @sidebarWidth;
      z-index: @maxZindex - 1;
      background: #FFF;
      box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
      overflow-y: auto;
      overflow-x: hidden;
    }
</style>
