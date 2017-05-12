<style lang="less" module>
     @import '../../assets/less/variable.less';
    .content{
        width: 90%;
        margin: 0 auto;
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .left,.right{
        background-color: #fff;
    }
    .left{
        flex: 1;
    }
    .right{
        width: 30rem;
        margin-left: 2rem;
    }
    @media screen and (max-width:70rem){
        .right{
            display:none;
        }
    }
</style>
<template>
    <div>
        <NavHeader></NavHeader>
        <div :class="$style.content">
            <div :class="$style.left">
                <Item v-for="(item,index) in list" :key="index"></Item>
            </div>
            <div :class="$style.right">
                right-content
            </div>
        </div>
    </div>
</template>
<script>
    import NavHeader from './header.vue'
    import Item from './blogItem.vue'
    import { mapState } from 'vuex'
    export default {
        components: {
            NavHeader,
            Item
        },
        computed: {
            ...mapState({
                list: state => state.blog.list
            })
        },
        asyncData({ store, route }) {
            return store.dispatch('blog/GET_LIST')
        }
    }
</script>