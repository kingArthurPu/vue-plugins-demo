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

      }
    }
  }
}
</script>
