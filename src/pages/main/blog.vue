<style lang="less" module>
    .content{
        width: 100%;
        background-color: #fff;
    }
</style>
<template>
    <div>
        <NavHeader></NavHeader>
        <div :class="$style.content">
            <div v-for="(item,index) in list" :key="index">
                {{item.a}}
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