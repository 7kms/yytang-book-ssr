<style lang="less" module>
  .content{
    background-color: #fff;
  }
</style>
<template>
  <div>
    <NavHeader></NavHeader>
    <div :class="$style.content"></div>
  </div>
</template>
<script>
  import NavHeader from './Header.vue'
  export default {
    components: {
      NavHeader
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }],
        value: '选项1'
      }
    }
  }
</script>