<template>
  <div>
    <input type="text" :value="currentValue" @input="input">
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    input (e) {
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    value (val) {
      console.log(val)
      this.currentValue = val
    }
  }
}
</script>
