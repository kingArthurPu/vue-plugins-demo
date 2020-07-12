<template>
  <input type="text" :value="val" @input="updateVal">
</template>

<script>
export default {
  name: 'vinput',
  model: {
    prop: 'val',
    event: 'changeVal'
  },
  props: {
    val: {
      type: String
    }
  },
  methods: {
    updateVal (e) {
      this.$emit('changeVal', e.target.value)
    }
  }
}
</script>
