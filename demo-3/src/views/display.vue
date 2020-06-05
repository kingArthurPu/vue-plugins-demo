<template>
  <div>
    <h3>动态渲染.vue文件的组件</h3>
    <z-display :code="code"></z-display>
    <button @click="handleClick">alert</button>
  </div>
</template>
<script>
import zDisplay from '../components/display/display'
import defaultCode from './default-code'
export default {
  name: 'Display',
  components: {
    zDisplay
  },
  data () {
    return {
      code: defaultCode
    }
  },
  methods: {
    handleClick () {
      this.$Alert.info({
        content: '这是测试'
      })
    }
  }
}
</script>
