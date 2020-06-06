<template>
  <div class="alert">
    <template  v-if="type==='alert'">
      <div class="alert-main"   v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
    </template>
    <template v-else-if="type==='confirm'">
      <div class="alert-main confirm-main" v-for="item in notices" :key="item.name">
        <div class="alert-content confirm-content">{{ item.content }}</div>
        <div class="btn-content">
          <button v-if="item.cancel" @click="confirmCancel">{{ item.cancel.text }}</button>
          <button v-if="item.ok" @click="confirmOk">{{ item.ok.text }}</button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
let seed = 0
function getUid () {
  return 'alert_' + (seed++)
}
export default {
  name: 'Alert',
  data () {
    return {
      type: 'alert',
      notices: []
    }
  },
  methods: {
    add (notice) {
      const name = getUid()
      const _notice = Object.assign({
        name
      }, notice)
      // 定时移除
      const duration = notice.duration
      this.type = notice.type

      if (this.type === 'confirm') {
        _notice.cancel.text = notice.cancel.text
        _notice.ok.text = notice.ok.text
        _notice.cancel.callback = notice.cancel.callback ? notice.cancel.callback : function () {}
        _notice.ok.callback = notice.ok.callback ? notice.ok.callback : function () {}
      }

      this.notices.push(_notice)
      if (duration !== 0 && notice.type === 'alert') {
        setTimeout(() => {
          this.remove(name)
        }, duration)
      }
      return name
    },
    remove (name) {
      this.notices.splice(this.notices.findIndex(item => item.name === name), 1)
    },
    confirmCancel () {
      console.log('noooo')
      if (typeof this.notices[0].cancel.callback !== 'function') {
        return
      }
      this.notices[0].cancel.callback()
    },
    confirmOk () {
      console.log(this.notices[0].ok.callback)
      if (typeof this.notices[0].ok.callback !== 'function') {
        return
      }
      this.notices[0].ok.callback()
      this.remove(this.notices[0].name)
    }
  }
}
</script>
<style scoped>
.alert {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  z-index: 100;
}
.alert-content {
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
}
.confirm-main{
  padding: 8px 16px;
  flex-direction: column;
}
.confirm-content{
  box-shadow: inherit;
}
</style>
