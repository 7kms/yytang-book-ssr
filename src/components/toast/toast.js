import Vue from 'vue';
import Toast from './toast.vue';
Toast.newInstance = properties => {
    var _props = properties || {};
    let div = document.createElement('div');
    div.innerHTML = `
        <Toast :visible="visible" :duration="duration">{{text}}</Toast>
    `;
    div = document.body.appendChild(div);
    const toast = new Vue({
        el: div,
        data: Object.assign({
            duration: 2500,
            text: '',
            visible: false
        }, _props),
        components: {
            Toast
        },
        methods: {
            remove() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onRemove() {
                _props.onRemove && _props.onRemove();
            },
            refresh(options) {
                this.visible = true;
                this.duration = options.duration || 2500;
                this.text = options.text || '';
            }
        }
    }).$children[0];
    return {
        show(options) {
            if (typeof options == 'string') {
                toast.$parent.refresh({
                    text: options
                });
            }
            toast.$parent.refresh(options);
        }
    }
}
export default Toast;