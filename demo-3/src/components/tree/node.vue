<template>
  <ul>
    <li>
      <span @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <zcheckbox
        v-if="showCheckbox"
        :value="data.checked"
        @input="handleCheck">
      </zcheckbox>
      <span>{{ data.title }}</span>
      <template  v-if="data.expand">
        <tree-node
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        ></tree-node>
      </template>
    </li>
  </ul>
</template>

<script>
import zcheckbox from '../checkbox/checkbox'

import { findComponentUpward } from '../../lib/assist'
export default {
  name: 'TreeNode',
  components: {
    zcheckbox
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tree: findComponentUpward(this, 'tree')
    }
  },
  methods: {
    handleExpand () {
      this.$set(this.data, 'expand', !this.data.expand)

      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data)
      }
    },
    handleCheck (checked) {
      this.updateTreeDown(this.data, checked)

      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data)
      }
    },
    updateTreeDown (data, checked) {
      this.$set(data, 'checked', checked)

      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked)
        })
      }
    }
  },
  watch: {
    'data.children': {
      handler (data) {
        if (data) {
          const checkedAll = !data.some(item => !item.checked)
          this.$set(this.data, 'checked', checkedAll)
        }
      },
      deep: true
    }
  }
}
</script>

<style  scoped>
ul,li{
  list-style: none;
}
</style>
