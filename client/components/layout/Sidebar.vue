<template>
    <aside class="app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
        <flex-box class="sidebar-hd menu-label" justify="space-between">
            <label>菜单项</label>
            <i class="fa fa-bars" aria-hidden="true"></i>
        </flex-box>
        <ul class="menu-list sidebar-bd">
            <li v-for="(item, index) in menuItems">
                <router-link :to="item.path" :exact="true"  v-if="item.path" @click.native="toggle(index, item)">
                    <span class="icon icon-title"><i :class="['fa', item.meta.icon]"></i></span>
                    {{ item.meta.label || item.name }}
                    <span class="icon icon-expand" v-if="item.children && item.children.length">
                        <i class="fa fa-angle-down"></i>
                    </span>
                </router-link>
                <a  v-else @click="toggle(index, item)">
                    <span class="icon icon-title"><i :class="['fa', item.meta.icon]"></i></span>
                    {{ item.meta.label || item.name }}
                    <span class="icon icon-expand" v-if="item.children && item.children.length">
                        <i class="fa fa-angle-down"></i>
                    </span>
                </a>
                <transition @beforeEnter="beforeEnter"
                            @afterEnter="afterEnter"
                            @beforeLeave="beforeLeave"
                            @afterLeave="afterLeave">
                <ul v-show="item.meta.expanded" v-if="item.children && item.children.length">
                    <li v-for="subItem in item.children">
                        <router-link :to="generatePath(item, subItem)">
                            {{ subItem.meta && subItem.meta.label || subItem.name }}
                        </router-link>
                    </li>
                </ul>
                </transition>
            </li>
        </ul>
    </aside>
</template>


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
        padding: 15px 0;
        .sidebar-hd {
            padding: 0 15px;
        }
        .sidebar-bd{
            .collapse {
                display: none;
                &.in {
                    display: block;
                }
            }
            .collapsing {
                position: relative;
                height: 0;
                overflow: hidden;
                transition: height .377s ease;
            }
            a{
                position: relative;
            }
            .icon{
                .fa{
                    font-size: 14px;
                }
                &.icon-title .fa{
                    font-size: 12px;
                }
                &.icon-expand{
                    position: absolute;
                    right: 15px;
                }
            }
            font-size: 14px;
            li{
                position: relative;
            }
            ul{
                margin: 0 15px;
                opacity: 1;
            }

        }
    }
</style>


<script>
import { mapGetters, mapActions } from 'vuex'

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
  computed:{
    ...mapGetters([
        "layout",
        "menuItems"
    ])
  },
  mounted () {

  },
  methods: {
    ...mapActions([
        "expandMenu"
    ]),
    beforeEnter (el) {
      el.classList.remove('collapse')
      el.style.display = 'block'
      el.classList.add('collapsing')
      el.style.height = `${el.scrollHeight}px`
    },
    afterEnter (el) {
      el.classList.remove('collapsing')
      el.classList.add('collapse', 'in')
    },
    beforeLeave (el) {
      el.classList.add('collapsing')
      el.classList.remove('collapse', 'in')
      el.style.height = 0
    },
    afterLeave (el) {
      el.classList.remove('collapsing')
      el.classList.add('collapse')
      el.style.display = 'none'
    },
    isExpanded(item) {
        return item.meta.expanded;
    },
    toggle (index, item) {
      this.expandMenu(item)
    },

    generatePath (item, subItem) {
      return `${item.component ? item.path + '/' : ''}${subItem.path}`
    },


  },

  watch: {

  }

}


</script>
