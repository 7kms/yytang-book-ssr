<style lang="less" module>
 @import '../../assets/less/variable.less';
 .right{
     color: @hint-color-right;
 }
 .error{
     color: @hint-color-error;
 }
</style>
<template>
    <span :class="[type == 'right' ? $style.right : $style.error ]">
        <y-icon :name="name" :size="size"></y-icon><slot></slot>
    </span>
</template>
<script>
    export default {
        name: 'y-hint',
        props: {
            type: {
                type: String,
                default: 'error'
            },
            size: {
                type: [Number, String],
                default: 10
            }
        },
        computed: {
            name() {
                let name = '';
                switch (this.type) {
                    case 'error':
                        name = 'fire';
                        break;
                    case 'right':
                        name = 'bulb';
                }
                return name;
            }
        }
    }
</script>