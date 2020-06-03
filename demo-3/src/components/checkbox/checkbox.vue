<template>
  <label class="container">
    <span class="out-circel">
      <input
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      />
      <span class="check-pointer"></span>
    </span>
    <slot></slot>
  </label>
</template>
<script>
import Emitter from '../../lib/emitter'
import { findComponentUpward } from '../../lib/assist.js'
export default {
  name: 'zCheckbox',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      parent: null,
      model: [],
      group: false
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'zCheckboxGroup')
    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  methods: {
    change (event) {
      if (this.disabled) {
        return false
      }
      const checked = event.target.checked
      this.currentValue = checked
      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
        this.dispatch('zFormItem', 'on-form-change', value)
      }
    },
    updateModel () {
      this.currentValue = this.value === this.trueValue
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw new Error('Value should be trueValue or falseValue')
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.container .out-circel {
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 100%;
  background-color: #cccccc;
}
.container .out-circel input {
  display: none;
}
.container .out-circel .check-pointer {
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container .out-circel input:checked + .check-pointer {
  background-color: blue;
}
</style>
