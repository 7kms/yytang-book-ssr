<style lang="less" module>
  @import '../../assets/less/variable.less';
  @active-color: #3e3e3e;
  .logo{
    margin-right: 2rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    img{
      margin-right: 2rem;
    }
    span{
      height: 5rem;
      line-height: 5rem;
    }
    &:hover{
      color: @hint-color;
    }
     transition: color .3s;
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
  }
  .active{
    background-color: @active-color;
  }
</style>
<template>
    <nav :class="[$style.nav,'size-topic']">
        <router-link to="/" :class="$style.logo">
          <img :src="logo" width="40" height="40">
          <span>小y的技术博客</span>
        </router-link>
        <div :class="$style.link">
          <router-link to="/discover" :class="['link',$style.item,{[$style.active]:route.fullPath == '/discover' || route.fullPath == '/'}]">
           <y-icon name="search"></y-icon><span>discover</span>
          </router-link>
          <router-link to="/blog" :class="['link',$style.item,{[$style.active]:route.fullPath == '/blog'}]">blog</router-link>
        </div>
        <div :class="$style.userInfo">
          <div>
            <router-link to="/entrance/login" class="link">login</router-link> | <router-link to="/entrance/register" class="link">register</router-link>
          </div>
        </div>
    </nav>
</template>
<script>
   import { mapState } from 'vuex'
   export default {
      computed: {
        ...mapState({
          route: state => state.route
        })
      },
     data() {
       return {
         logo: require('../../assets/images/logo-white-144.png')
       }
     }
   }
</script>
