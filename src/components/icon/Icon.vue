<template>
    <i class="iconfont" :class="classes" :style="styles"></i>
</template>
<script>
    const prefixCls = 'y-icon';
    export default {
        name: 'y-icon',
        props: {
            name: String,
            size: [String, Number],
            color: String
        },
        computed: {
            classes () {
                const arr = [];
                arr.push(prefixCls);
                arr.push(`icon-${this.name}`);
                return arr;
            },
            styles () {
                const style = {};
                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }
                if (this.color) {
                    style['color'] = this.color;
                }
                return style;
            }
        }
    }
</script>