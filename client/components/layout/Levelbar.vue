<template>
  <flex-box class="app-levelbar" justify="space-between">
    <h3>{{name}}</h3>
    <flex-box class="routers">
      <div v-for="(item, index) in list" :key="index" class="router">
          <span v-if="index === list.length - 1">{{ item.name }}</span>
          <router-link :to="item.path" v-else>{{ item.name }}</router-link>
      </div>
    </flex-box>
  </flex-box>
</template>
<style lang="less">
@import "../../assets/css/index";
.app-levelbar{
    h3{
      font-weight: 600;
      font-size: 18px;
    }
    margin-bottom: 15px;
    .routers{
        .router{
            display: inline-block;
            &:before{
                color: #4a4a4a;
                content: "\0002f";
                display: inline-block;
                padding: 0 10px;
            }
            &:first-child:before{
                display: none;
            }
        }
    }
}
</style>
<script>
export default {
    components: {
    },
    data () {
        return {
            list: null
        };
    },
    created () {
        this.getList();
    },
    computed: {
        name () {
            return this.$route.name;
        }
    },
    methods: {
        getList () {
            let matched = this.$route.matched.filter(item => item.name);
            let first = matched[0];
            if (first && (first.name !== 'Home' || first.path !== '')) {
                matched = [{ name: 'Home', path: '/' }].concat(matched);
            }
            console.log(matched);
            this.list = matched;
        }
    },
    watch: {
        $route () {
            this.getList();
        }
    }
};
</script>
