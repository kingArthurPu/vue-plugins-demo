<template>
  <div>
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    >
    </tree-node>
  </div>
</template>

<script>
import TreeNode from './node'
import { deepCopy } from '../../utils/assets'
export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.dataClone()
  },
  watch: {
    data () {
      this.dataClone()
    }
  },
  methods: {
    dataClone () {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  }
}
</script>
