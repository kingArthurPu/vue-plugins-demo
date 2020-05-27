<template>
  <div class="B">
    B.vue
    <C val="b-val" />
  </div>
</template>
<script>
import C from './C'
export default {
  name: 'B',
  components: {
    C
  }
}
</script>
<style scoped>
  .B{
    color: blue;
    border: 1px solid blue;
  }
</style>
