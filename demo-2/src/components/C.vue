<template>
  <div>
    C.vue
    <button @click="handlerClick">C dispatch fn</button>
  </div>
</template>
<script>
import emitter from '../lib/js/emitter'
export default {
  name: 'C',
  mixins: [emitter],
  mounted() {
    console.log(this.$parent)
    this.$on('test', (...e) => {
      console.log(e)
    })
  },
  methods: {
    handlerClick() {
      this.dispatch('App', 'fn', ['hehe', 'haha'])
    },
  },
}
</script>
