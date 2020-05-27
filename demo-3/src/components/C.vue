<template>
  <div class="C">
    C.vue
  </div>
</template>
<script>
import { findComponentUpward, findComponentsUpward } from '../lib/assist'
export default {
  name: 'C',
  props: {
    val: {
      default: 'c-val'
    }
  },
  mounted () {
    const A = findComponentUpward(this, 'A')
    if (A) {
      console.log(A)
      console.log(A.msg)
      // A.test()
    }
    console.log(findComponentsUpward(this, 'B'))
  }
}
</script>
<style scoped>
  .C{
    color: green;
  }
</style>
