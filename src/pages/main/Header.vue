<style>
.adadad{
  color: #fff;
}
</style>

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
    min-width: 70rem;
    color: #fff;
    background-color: @theme-color;
  }
  .link{
    flex: 1;
    .icon{
      margin-right: 1rem;
    }
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
          <span>小y收录</span>
        </router-link>
        <div :class="$style.link">
         <router-link to="/blog" :class="['link',$style.item,{[$style.active]:hightRoute == 'blog'}]">
           <y-icon name="blog" :class="$style.icon" /><span>blog</span>
          </router-link>
          <router-link to="/discover" :class="['link',$style.item,{[$style.active]:hightRoute == 'discover'}]">
           <y-icon name="discover" :class="$style.icon" /><span>discover</span>
          </router-link>
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
        }),
        hightRoute() {
            const fullPath = this.route.fullPath;
            let str = '';
            if (fullPath == '/discover') {
              str = 'discover';
            } else if (fullPath == '/blog' || fullPath == '/') {
               str = 'blog';
            }
            return str;
        }
      },
     data() {
       return {
         logo: require('../../assets/images/logo-white-144.png')
       }
     },
     created() {
       console.log(this.$store.state.route)
     }
   }
</script>
