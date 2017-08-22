<template>
  <div id="app" class="pcadmin">
      <div class="nprogress-container"></div>
      <Navbar :show="layout.showNavbar" v-if="layout.showNavbar">
            <flex-box class="hd" justify="space-between">
                <flex-box class="logo">
                    <i class="fa fa-linux" aria-hidden="true"></i>
                    <span class="title">系统管理</span>
                </flex-box>

                <flex-box class="cmenus">
                    <a href="#/home">
                        <span>主页</span>
                    </a>
                    <a href="#/home">
                        <span>主页1</span>
                    </a>
                    <a href="#/home">
                        <span>主页2</span>
                    </a>
                </flex-box>

                <flex-box class="userinfo">
                    用户信息
                </flex-box>
            </flex-box>
      </Navbar>
      <Sidebar :show="layout.showSidebar" v-if="layout.showSidebar"></Sidebar>
      <AppMain></AppMain>
  </div>
</template>

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
                height: 3px;
                background: @progressColor;
            }
            .peg {
                box-shadow: 0 0 20px @progressColor, 0 0 10px @progressColor;
            }
            .spinner-icon {
                border-top-color: @progressColor;
                border-left-color: @progressColor;
            }
        }
    }
    .pcadmin{
        .hd{
            height: 100%;
            padding: 0 30px 0 15px;
            font-size: 14px;
            .logo{
                font-size: 25px;
                .title{
                    padding-left: 15px;
                }
            }
            .cmenus{
                .flex(1);
                height: 100%;
                a{
                    .center();
                    padding: 0 20px;
                    height: 100%;
                    &:hover{
                        background-color: whitesmoke;
                    }
                }
            }
        }
    }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Navbar, Sidebar, AppMain} from './components/layout/index'

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
    computed:{
        ...mapGetters([
            "layout"
        ])
    },
    mounted(){
        this.$http.get('http://www.a.com')
        .catch((resp)=>{
            console.log(resp)
        });
    }
}
</script>
