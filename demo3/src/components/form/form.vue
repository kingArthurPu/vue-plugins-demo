<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>
<script>
export default {
  name: 'zForm',
  data() {
    return {
      fields: [],
    }
  },
  provide(){
    return {
      form:this
    }
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  created() {
    // 添加form-item实例
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })
    // 移除form-item实例
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
}
</script>
