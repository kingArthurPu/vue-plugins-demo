<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
<script>
import emitter from '@/lib/emitter'
export default {
  name: 'zInput',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('zFormItem', 'on-form-change', value)
    },
    handleBlur() {
      this.dispatch('zFormItem', 'on-form-blur', this.currentValue)
    },
  },
}
</script>
