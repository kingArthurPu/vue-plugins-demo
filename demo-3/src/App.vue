<template>
  <div id="app">
    <z-form :model="formValidate" :rules="ruleValidate" ref="form">
      <z-form-item label="用户名" prop="name">
        <z-input v-model="formValidate.name"></z-input>
      </z-form-item>
      <z-form-item label="邮箱" prop="mail">
        <z-input v-model="formValidate.mail"></z-input>
      </z-form-item>
    </z-form>
    <button @click="submit">提交</button>
    <button @click="reset">重置</button>
    <A/>
  </div>
</template>
<script>
import zForm from './components/form/form'
import zFormItem from './components/form/form-item'
import zInput from './components/input/input'
import A from './components/A'
export default {
  name: 'App',
  components: {
    zForm,
    zFormItem,
    zInput,
    A
  },
  data () {
    return {
      value: 'hello world',
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log('提交成功')
        } else {
          console.log('表单校验失败')
        }
      })
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style></style>
