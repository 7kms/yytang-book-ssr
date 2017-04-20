<template>
   <div>
      <nav>
         <a href="/" class="">
            <img :src="logo" alt="">
         </a>
         <div>
            <span>发现</span>
            <span>资讯</span>
         </div>
         <div>
            登录
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>
<script>
   export default {
     data() {
       return {
         logo: require('../../assets/images/logo-48.jpg')
       }
     }
   }
</script>
