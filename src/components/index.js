// import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Icon from './icon'
import ImageContain from './imageContain'
import Button from './button'
import Hint from './hint'

const componentsObj = {
    Icon,
    ImageContain,
    Button,
    Hint
}
const install = function(Vue) {
    Vue.use(ElementUI)
    Object.keys(componentsObj).forEach((val) => {
        Vue.component(componentsObj[val].name, componentsObj[val])
    })
}

export default { install }