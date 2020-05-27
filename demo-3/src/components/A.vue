<template>
  <div class="A">
    A.vue
    <B/>
    <C/>
  </div>
</template>
<script>
import B from './B'
import C from './C'
import { findComponentDownward } from '../lib/assist'
export default {
  name: 'A',
  components: {
    B,
    C
  },
  data () {
    return {
      msg: '组件A'
    }
  },
  methods: {
    test () {
      console.log('test ...')
    }
  },
  mounted () {
    const c = findComponentDownward(this, 'C')
    console.log(c)
  }
}
</script>
<style scoped>
  .A{
    color: red;
    border: 1px solid red;
  }
</style>
