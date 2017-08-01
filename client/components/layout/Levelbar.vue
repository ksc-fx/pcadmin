<template>
  <nav class="app-levelbar">
    <h3>{{name}}</h3>
  </nav>
</template>
<style lang="less">
  @import "../../assets/css/index";
  .app-levelbar{
    h3{
      font-weight: 600;
      font-size: 16px;
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
    }
  },

  created () {
    this.getList()
  },

  computed: {
    name () {
      return this.$route.name
    }
  },

  methods: {
    getList () {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]
      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched)
      }
      console.log(matched);
      this.list = matched
    }
  },

  watch: {
    $route () {
      this.getList()
    }
  }
}
</script>
