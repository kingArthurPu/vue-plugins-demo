import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Alert from './components/alert/alert'
import Confirm from './components/alert/confirm'

import vvinput from '@/components/vmodel/v-input'

Vue.component('vvinput', vvinput)

Vue.config.productionTip = false

Vue.prototype.$Alert = Alert

Vue.prototype.$Confirm = Confirm

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
