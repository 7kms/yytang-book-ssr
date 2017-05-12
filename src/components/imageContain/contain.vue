<template>
    <div class="yy-image-contain" :style="style"></div>
</template>
<script>
    export default {
        name: 'y-image',
         props: {
            url: {
                type: String,
                required: true
            }
        },
        computed: {
            style() {
                return {
                    backgroundImage: `url(${this.url})`
                }
            }
        }
    }
</script>