<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import  AsyncValidator from 'async-validator'
import emitter from '@/lib/emitter'
export default {
  name: 'zFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
    },
  },
  inject:['form'],
  mixins:[emitter],
  data() {
    return {
      validateState: '',  // 校验状态
      validateMessage: '',  // 校验不通过时的提示信息
    }
  },
  methods: {
    setRules(){
      this.$on('on-form-change',this.onFieldChange)
      this.$on('on-form-blur',this.onFieldBlur)
    },
    onFieldBlur(){

    },
    onFieldChange(){

    }
  },
  computed: {
    // 从Form的model中动态得到当前表单组件的数据
    fieldValue(){
      return this.form.model[this.prop]
    }
  },
  mounted() {
    // 组件渲染时，将实例缓存在 Form 中
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if(this.prop){
      this.dispatch('zForm','on-form-item-add',this)
      this.setRules()
    }
  },
  beforeDestroy(){
    // 组件销毁前，将实例从 Form 的缓存中移除
    this.dispatch('zForm','on-form-item-remove',this)
  }
}
</script>
