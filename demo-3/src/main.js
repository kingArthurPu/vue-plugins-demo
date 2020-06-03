import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const code = `<template>xxx
<div>
    <input v-model="message">
    {{ message }}
</div>
</template>
<script>
export default {
    data () {
        return {
            message: ''
        }
    }
}
</script>`
// const regex = new RegExp('')
const openingTag = code.match(/<template>\r\n(.*?)\r\n<\/template>/)
console.log(openingTag)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
