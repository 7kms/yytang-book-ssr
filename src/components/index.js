// import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Icon from './icon'
import ImageContain from './imageContain'
import Button from './button'
import Hint from './hint'
import Toast from './toast'

const componentsObj = {
    Icon,
    ImageContain,
    Button,
    Hint,
    Toast
}
const install = function(Vue) {
    Vue.use(ElementUI)
    Object.keys(componentsObj).forEach((val) => {
        const cName = componentsObj[val].name;
        cName && Vue.component(cName, componentsObj[val])
    })
    Vue.prototype.$Toast = Toast;
}

export default { install }