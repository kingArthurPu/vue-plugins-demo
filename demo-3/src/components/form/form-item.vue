<template>
  <div>
    <label v-if="label" :class="{ 'z-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="z-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import emitter from '@/lib/emitter'
export default {
  name: 'zFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  inject: ['form'],
  mixins: [emitter],
  data () {
    return {
      initiaValue: null,
      isRequired: false, // 是否为必填
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  methods: {
    setRules () {
      const rules = this.getRules()
      if (rules.length) {
        // 强制先写 required 规则
        rules.every(item => {
          this.isRequired = item.required
        })
      }
      this.$on('on-form-change', this.onFieldChange)
      this.$on('on-form-blur', this.onFieldBlur)
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules () {
      let formRules = this.form.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(formRules || [])
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter(
        rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      )
    },

    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate (trigger, callback = function () {}) {
      const rules = this.getFilteredRule(trigger)
      console.log(rules)
      if (!rules || rules.length === 0) {
        return true
      }
      // 设置状态为校验中
      this.validateState = 'validating'
      // 调用async-validator
      const descriptor = {}
      descriptor[this.prop] = rules
      console.log(descriptor)
      const validator = new AsyncValidator(descriptor)
      const model = {}
      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },

    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    },
    // 重置数据
    resetField () {
      this.validateState = ''
      this.validateMessage = ''
      this.form.model[this.prop] = this.initiaValue
    }
  },
  computed: {
    // 从Form的model中动态得到当前表单组件的数据
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  mounted () {
    // 组件渲染时，将实例缓存在 Form 中
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('zForm', 'on-form-item-add', this)
      this.setRules()
      // 设置初始值，以便在重置时恢复默认值
      this.initiaValue = this.fieldValue
    }
  },
  beforeDestroy () {
    // 组件销毁前，将实例从 Form 的缓存中移除
    this.dispatch('zForm', 'on-form-item-remove', this)
  }
}
</script>
<style>
.z-form-item-label-required:before {
  content: '*';
  color: red;
}
.z-form-item-message {
  color: red;
}
</style>
