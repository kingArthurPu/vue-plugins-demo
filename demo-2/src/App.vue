<template>
  <div id="app">
    <button @click="handlerClick">xxx</button>
    <A></A>
  </div>
</template>
<script>
import emitter from '@/lib/js/emitter'
import A from './components/A'
import B from './components/B'
export default {
  name: 'App',
  mixins: [emitter],
  created() {},
  mounted() {
    this.$on('fn', (...e) => {
      console.log(e)
    })
  },
  methods: {
    handlerClick() {
      this.broadcast('C', 'test', ['aa', 'bb'])
    },
  },
  components: {
    A,
    B,
  },
}
</script>
<style></style>
