import transform from './transform';

const directiveObj = {
    transform
};

const install = function(Vue) {
    Object.keys(directiveObj).forEach((key) => {
        Vue.use(directiveObj[key]);
    });
};
export default {
    install
}