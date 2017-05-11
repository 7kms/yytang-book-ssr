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
            
        </div>
    </div>
</template>
<script>
    import NavHeader from './header.vue'
    import Item from './blogItem.vue'
    export default {
        components: {
            NavHeader,
            Item
        },
        asyncData({ store, route }) {
            return store.dispatch('blog/GET_LIST')
        },
        created() {

        }
    }
</script>