<style lang="less" module>
    @import '../../assets/less/variable.less';
    .content{
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid @line-color-split;
        cursor: pointer;
        &:hover{
            background-color: rgba(0,0,0,.01);
        }
    }
    .info{
        flex: 1;
        margin-right: 1rem;
    }
    .title{
        font-weight: 600;
        color: @font-color-topic;
        &:visited{
            /*color: @font-color-weak;*/
        }
    }
    .infoItem + .infoItem{
        margin-top: .8rem;
    }
    .action{
        display: flex;
    }
    .actionItem{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        padding: 0 .5rem;
        border: 1px solid @line-color-split;
        cursor: pointer;
        span{
            margin-top: -.2rem;
            margin-left: .5rem;
        }
        &.itemComment{
            margin-left: -1px;
        }
    }
    .picture{
        width: 5rem;
        height: 5rem;
        border-radius: .5rem;
    }
</style>
<template>
    <li :class="[$style.content]">
        <div :class="$style.info">
            <div :class="['labels weak',$style.infoItem]">
                    <span class="label-item">小深刻的秋鼠</span>
                    <span class="label-item">5小时前</span>
                    <span class="label-item">js/前端</span>
            </div>
            <div :class="['text-one-line',$style.infoItem]">
                <a :class="['topic',$style.title]" target="_blank" href="http://www.jianshu.com/p/c83503f0384d">JavaScript深入之继承的多种方式和优缺点</a>
            </div>
            <div :class="[$style.action,'color-weak',$style.infoItem]">
                <div :class="$style.actionItem">
                    <y-icon name="heart"/><span>26</span>
                </div>
                <div :class="[$style.actionItem,$style.itemComment]">
                    <y-icon name="comment"/><span>2</span>
                </div>
            </div>
        </div>
        <div>
            <y-image :class="$style.picture" :url="'https://dn-mhke0kuv.qbox.me/db6d5fa5864bc9a39519.jpeg?imageView2/1/w/120/h/120/q/85/interlace/1'"></y-image>
        </div>
    </li>
</template>
<script>
    export default {}
</script>