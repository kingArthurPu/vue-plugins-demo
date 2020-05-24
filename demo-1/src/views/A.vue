<template>
  <div>
    A.VUE
  </div>
</template>
<script>
import a from './a'
export default {
  mixins:[a],
  name:'A',
  inject:[
    'app'
  ],
  props:['username'],
  mounted() {
    console.log(this.$parent.$options.name)
    // console.log(this.$options.name)
    this.show()
    console.log(this.username)
    console.log(this.app.name)
  },
}
</script>