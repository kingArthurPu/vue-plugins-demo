<template>
  <component :is="tag" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {

    to: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    }
  },
  computed: {
    tag () {
      return this.to ? 'a' : 'button'
    },
    attrs () {
      const attrs = {}
      if (this.to) {
        attrs.href = this.to
        attrs.target = this.target
      }
      return attrs
    }
  }
}
</script>
