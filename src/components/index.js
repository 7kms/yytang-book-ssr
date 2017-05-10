// import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import Icon from './icon'

const componentsObj = {
    Icon
}
const install = function(Vue) {
    Vue.use(ElementUI)
    Object.keys(componentsObj).forEach((val) => {
        Vue.component(componentsObj[val].name, componentsObj[val])
    })
}

export default { install }