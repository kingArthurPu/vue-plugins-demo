<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Emitter from '../../lib/emitter'
import { findComponentsDownward } from '../../lib/assist.js'
export default {
  name: 'zCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'zCheckbox')
      if (this.childrens.length) {
        const { value } = this
        this.childrens.forEach(child => {
          child.model = value
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change (data) {
      console.log(data)
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('zFormItem', 'on-form-change', data)
    }
  },
  mounted () {
    this.updateModel(true)
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  }
}
</script>
