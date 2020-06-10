<template>
  <div>
    <input type="radio" :name="name" :value="label" @input="input" :checked="checked">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Radio',
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      currentVal: this.value,
      checked: this.value === this.label
    }
  },
  methods: {
    input (e) {
      console.log(e.target.value)
      this.$emit('input', e.target.value)
    }
  },
  watch: {
    value (val) {
      this.currentVal = val
      this.checked = this.currentVal === this.label
    }
  }
}
</script>
