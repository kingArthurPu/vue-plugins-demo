<template>
  <div>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button>
  </div>
</template>
<script>
export default {
  name: 'Notice',
  data () {
    return {
      wAlert: null
    }
  },
  methods: {
    alert () {
      this.wAlert = this.$Alert.info({
        content: '这是测试',
        duration: 0
      })
      setTimeout(() => {
        this.wAlert.clear()
      }, 2000)
    },
    confirm () {
      this.$Confirm({
        content: '确定吗?',
        ok: {
          text: 'OK',
          callback: function () {
            console.log('你点了确定')
          }
        },
        cancel: {
          text: 'NO'
        }
      })
    }
  }
}
</script>
