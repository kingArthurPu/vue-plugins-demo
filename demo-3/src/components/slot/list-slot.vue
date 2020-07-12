<template>
  <ul>
    <li v-for="(item,index) in list"  :key="index">
      <slot :item="item">
        列表{{index}}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array
    }
  }
}
</script>
