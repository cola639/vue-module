import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

// 组件

// Plugins
import plugins from './plugins'

// CSS
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI) // PC
Vue.use(plugins)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/x-button.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
