<template>
  <div>
    <h3>动态渲染.vue文件的组件</h3>
    <z-display :code="code"></z-display>
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
  }
}
</script>
