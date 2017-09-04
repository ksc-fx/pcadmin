<template>
<section class="app-main" :style="[hiddenSidebarStyle]">
  <div class="app-content">
    <levelbar v-if="showLevelbar"></levelbar>
    <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear>
      <router-view class="animated"></router-view>
    </transition>
  </div>
</section>
</template>

<script>
import Levelbar from './Levelbar';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            layout: 'layout'
        }),
        hiddenSidebarStyle () {
            return !this.layout.showSidebar ? { 'margin-left': 0 } : null;
        }
    },
    data () {
        return {
            showLevelbar: true
        };
    },
    methods:{

    },
    components: {
        Levelbar
    }
};
</script>

<style lang="less" scoped>
  @import "../../assets/css/index";
  .app-main {
    padding-top: @navbarHeight;
    margin-left: @sidebarWidth;
    transform: translate3d(0, 0, 0);
  }
  .app-content {
    padding: 20px;
  }
</style>
