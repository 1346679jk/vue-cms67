// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入Mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
