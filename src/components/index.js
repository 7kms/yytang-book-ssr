import { Button, Select } from 'element-ui'

const componentsObj = {
    Button,
    Select
}
const install = function(Vue) {
    Object.keys(componentsObj).forEach((val) => {
        Vue.component(componentsObj[val].name, componentsObj[val])
    })
}

export default { install }