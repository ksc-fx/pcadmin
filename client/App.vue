<!--
@file: 主APP引入文件
-->
<template>
  <div id="app" class="pcadmin">
      <!--顶部导航-->
      <Navbar :show="layout.showNavbar" v-if="layout.showNavbar">
            <!--navbar 内容-->
            <flex-box class="hd" justify="space-between">
                <flex-box class="logo">
                    <i class="fa fa-linux" aria-hidden="true"></i>
                    <span class="title">系统管理</span>
                </flex-box>

                <flex-box class="cmenus">
                    <a href="#/home">
                        <span>主页</span>
                    </a>
                </flex-box>

                <flex-box class="userinfo">
                    用户信息
                </flex-box>
            </flex-box>
          <!--navbar 内容结束-->
      </Navbar>
      <!--侧边栏-->
      <Sidebar :show="layout.showSidebar" v-if="layout.showSidebar"></Sidebar>
      <!--页面内容-->
      <AppMain></AppMain>
  </div>
</template>

<style lang="less">
@import '~pcadmin-base/src/css/reset.less';
@import './assets/css/index';
.animated {
    animation-duration: 0.35s;
}

.pcadmin {
    .hd {
        height: 100%;
        padding: 0 30px 0 15px;
        font-size: 14px;
        .logo {
            font-size: 25px;
            .title {
                padding-left: 15px;
            }
        }
        .cmenus {
            .flex(1);
            height: 100%;
            a {
                .center();
                padding: 0 20px;
                height: 100%;
                &:hover {
                    background-color: whitesmoke;
                }
            }
        }
    }
}
</style>

<script>
import { mapGetters } from 'vuex';
import { Navbar, Sidebar, AppMain } from './components/layout/index';

export default {
    components: {
        Navbar,
        Sidebar,
        AppMain
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['layout'])
    },
    mounted() {
        this.$http.get('http://www.a.com').catch(resp => {
            console.log(resp);
        });
    }
};
</script>
