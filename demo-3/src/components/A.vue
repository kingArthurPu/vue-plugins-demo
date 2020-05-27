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
import { findComponentDownward, findComponentsDownward, findBrothersComponents } from '../lib/assist'
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

    const children = findComponentsDownward(this, 'C')
    console.log('*****', children)

    console.log(findBrothersComponents(this, 'B'))
  }
}
</script>
<style scoped>
  .A{
    color: red;
    border: 1px solid red;
  }
</style>
