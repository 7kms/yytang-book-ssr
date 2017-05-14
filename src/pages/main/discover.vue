<style lang="less" module>
  @import '../../assets/less/variable.less';
 .content{
        width: 90%;
        margin: 0 auto;
        padding-top: 2rem;
    }
    .list {
      width: 100%;
      background-color: #fff;
    }
    .classList{
      height: 4rem;
      padding-left: 1rem;
      display: flex;
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid @line-color-split;
    }
    .classItem{
      padding: 0 1rem;
      &:hover{
        color: @hint-color;
        cursor: pointer;
      }
      &.active{
        color: @hint-color;
      }
    }
    .classItem + .classItem{
      border-left: 1px solid @line-color-split;
    }
</style>
<template>
<div>
    <NavHeader></NavHeader>
    <div :class="$style.content">
      <div :class="$style.classList">
        <span @click="changeCategory('frontend')" :class="[$style.classItem,{[$style.active]:category == 'frontend'}]">前端</span>
        <span @click="changeCategory('ios')" :class="[$style.classItem,{[$style.active]:category == 'ios'}]">ios</span>
        <span @click="changeCategory('android')" :class="[$style.classItem,{[$style.active]:category == 'android'}]">android</span>
      </div>
      <ul :class="$style.list">
        <Item v-for="(item,index) in list" :key="index"></Item>
      </ul>
    </div>
  </div>
</template>
<script>
  import NavHeader from './header.vue'
  import Item from './discoverItem.vue'
  export default {
    components: {
      NavHeader,
      Item
    },
    data() {
      return {
        category: 'frontend',
        list: []
      }
    },
    methods: {
      changeCategory(category) {
        this.category = category;
      }
    },
    beforeMount() {
      setTimeout(() => {
        this.list = [{ a: 1 }, { a: 2 }, { a: 3 }];
      })
    }
  }
</script>