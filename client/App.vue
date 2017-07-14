<template>
  <div id="app">
      <div class="nprogress-container"></div>
      <Navbar :show="$store.state.layout.showNavbar" v-if="$store.state.layout.showNavbar"></Navbar>
      <Sidebar :show="$store.state.layout.showSidebar" v-if="$store.state.layout.showSidebar"></Sidebar>
      <AppMain></AppMain>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Navbar, Sidebar, AppMain} from 'components/layout/'
export default {
    components: {
        Navbar,
        Sidebar,
        AppMain,
    },
    data(){
        return {

        }
    },
    mounted(){
        this.$http.get('http://www.a.com')
        .catch((resp)=>{
            console.log(resp)
        });
    }
}
</script>

<style lang="less">
    @import "./assets/css/index";
    html {
      background-color: @bgColor;
    }
    .animated {
        animation-duration: .35s;
    }
    .nprogress-container {
        position: fixed !important;
        width: 100%;
        height: 50px;
        z-index: @maxZindex*2;
        pointer-events: none;
        #nprogress {
            .bar {
                background: @progressColor;
            }
            .peg {
                box-shadow: 0 0 10px @progressColor, 0 0 5px @progressColor;
            }
            .spinner-icon {
                border-top-color: @progressColor;
                border-left-color: @progressColor;
            }
        }
    }
</style>
