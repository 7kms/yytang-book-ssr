<style lang="less" module>
  @import '../../assets/less/variable.less';
  @active-color: #3e3e3e;
  .logo{
    margin-right: 2rem;
  }
  .nav{
    display: flex;
    align-items: center;
    padding: 0 3rem;
    justify-content: space-between;
    height: 5rem;
    color: #fff;
    background-color: @theme-color;
  }
  .link{
    flex: 1;
  }
  .item{
    display: inline-block;
    height: 5rem;
    line-height: 5rem;
    padding: 0 2rem;
    margin-right: 1rem;
    &:hover{
      background-color: @active-color;
    }
    transition: background-color .3s;
  }
  .active{
    background-color: @active-color;
  }
  .userInfo{
  }
</style>
<template>
    <nav :class="[$style.nav,'size-topic']">
        <router-link to="/" :class="$style.logo">
          <img :src="logo" width="40" height="40">
        </router-link>
        <div :class="$style.link">
          <router-link to="/discover" :class="['link',$style.item, $style.active]">discover</router-link>
          <router-link to="/blog" :class="['link',$style.item]">blog</router-link>
        </div>
        <div :class="$style.userInfo">
          <div>
            <span>login</span> | <span>register</span>
          </div>
        </div>
    </nav>
</template>
<script>
  import { mapState } from 'vuex'
   export default {
      computed: {
        ...mapState({
          route:(state)=>state.route
        })
      },
     data() {
       return {
         logo: require('../../assets/images/logo-white-144.png')
       }
     }
   }
</script>
