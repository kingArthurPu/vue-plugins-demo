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
  data () {
    return {
      fields: []
    }
  },
  provide () {
    return {
      form: this
    }
  },
  props: {
    // 表单控件绑定的数据对象，在校验或重置时会访问该数据对象下对应的表单数据
    model: {
      type: Object
    },
    // 表单验证规则
    rules: {
      type: Object
    }
  },
  methods: {
    // 重置所有数据
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 全部校验数据
    validate (callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            // 全部校验完成
            if (++count === this.fields.length) {
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  },
  created () {
    // 添加form-item实例
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field)
    })
    // 移除form-item实例
    this.$on('on-form-item-remove', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  }
}
</script>
