import Toast from './toast';
let toastInstance;
function getToastInstance (props) {
    toastInstance = toastInstance || Toast.newInstance(props);
    return toastInstance
}

function show (options) {
    const instance = getToastInstance(options);
    options.onRemove = function () {
        toastInstance = null;
    };
    instance.show(options)
}

Toast.show = function (props) {
    return show(props);
};

export default Toast;
