/**
 * Created by mac on 2016/12/8.
 */
<template>
  <div class="flexbox" :class="['dir-' + this.dir, 'justify-' + this.justify, 'align-' + this.align, 'wrap-'+ this.wrap]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'flexBox',
    props: {
        dir: {
            type: String,
            default: 'row'
        },
        justify: {
            type: String,
            default: 'center'
        },
        align: {
            type: String,
            default: 'center'
        },
        wrap: {
            type: String,
            default: 'nowrap'
        }
    }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/mixin";
.flexbox{
    &.dir-row{
        .flexbox(row);
    }
    &.dir-row-reverse{
        .flexbox(row-reverse);
    }
    &.dir-column{
        .flexbox(column);
    }
    &.dir-column-reverse{
        .flexbox(column-reverse);
    }
    // 水平方向
    &.justify-center{
        .flexjustify(center);
    }
    &.justify-flex-start{
        .flexjustify(flex-start);
    }
    &.justify-flex-end{
        .flexjustify(flex-end);
    }
    &.justify-space-between{
        .flexjustify(space-between);
    }
    &.justify-space-around{
        .flexjustify(space-around);
    }
    // 垂直方向
    &.align-center{
        .flexalign(center);
    }
    &.align-flex-start{
        .flexalign(flex-start);
    }
    &.align-flex-end{
        .flexalign(flex-end);
    }
    &.align-baseline{
        .flexalign(baseline);
    }
    &.align-stretch{
        .flexalign(stretch);
    }
    // 换行
    &.wrap-wrap{
        .flexwrap(wrap);
    }
}
</style>
