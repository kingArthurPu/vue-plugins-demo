import Vue from 'vue'
import Alert from './alert.vue'

Alert.newInstance = properties => {
  const props = properties || {}
  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props: props
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const alert = Instance.$children[0]
  return {
    add (noticeProps) {
      return alert.add(noticeProps)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}
export default Alert
