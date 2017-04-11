import Util from 'src/util';
const obj = {
    bind(el, binding, vNode) {
        el.innerHTML = Util.transformTextToHtml(binding.value);
    }
};
export default {
    install(Vue) {
        Vue.directive('transform', obj);
    }
}