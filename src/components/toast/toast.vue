<style lang="less" module>
    @import '../../assets/less/variable.less';
    @width: 160px;
    @height: 60px;
    .content {
        position: absolute;
        display: table;
        width: @width;
        height: @height;
        top: 50%;
        left: 50%;
        margin: -@height/2 0 0 -@width/2;
        border-radius: 4px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, .6);
        background-color: rgba(0, 0, 0, .6);
    }
    
    .message {
        display: table-cell;
        color: #fff;
        font-size: @font-size-base;
        vertical-align: middle;
    }
</style>
<template>
    <div class="y-mask text-center">
        <transition name="fade">
            <div :class="$style.content" v-show="visible">
                <div :class="$style.message">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            duration: {
                type: [Number, String]
            }
        },
        methods: {
            clearCloseTimer () {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close () {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
                this.$parent.remove();
            },
            calculate () {
                this.clearCloseTimer();
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration * 1);
            }
        },
        updated () {
            this.calculate();
        }
    }
</script>