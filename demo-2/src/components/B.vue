<template>
  <div>
    B.vue
    <C></C>
  </div>
</template>
<script>
import C from './C'
export default {
  name: 'B',
  components: {
    C,
  },
  mounted() {
    this.$on('fn', (...e) => {
      console.log(e)
    })
    this.$on('test', (...e) => {
      console.log(e)
    })
  },
}
</script>
