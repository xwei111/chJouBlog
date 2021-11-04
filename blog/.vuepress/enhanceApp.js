import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// web components
import './webComponents/button'
import './webComponents/input'

export default ({ Vue, options, router }) => {
    Vue.use(Element);
};