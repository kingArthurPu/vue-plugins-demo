<template>
  <div id="app">
    <z-form :model="formValidate" :rules="ruleValidate" ref="form">
      <z-form-item label="用户名" prop="name">
        <z-input v-model="formValidate.name"></z-input>
      </z-form-item>
      <z-form-item label="邮箱" prop="mail">
        <z-input v-model="formValidate.mail"></z-input>
      </z-form-item>
      <z-form-item label="爱好" prop="hobby">
        <z-checkbox-group v-model="formValidate.hobby">
          <z-checkbox label="踢球">踢球</z-checkbox>
          <z-checkbox label="唱歌">唱歌</z-checkbox>
          <z-checkbox label="跳舞">跳舞</z-checkbox>
          <z-checkbox label="躺尸">躺尸</z-checkbox>
          <z-checkbox label="躺尸2">躺尸2</z-checkbox>
        </z-checkbox-group>
      </z-form-item>
      <z-form-item label="勾选协议"  prop="xy">
        <z-checkbox v-model="formValidate.xy">用户协议{{formValidate.xy}}</z-checkbox>
      </z-form-item>
    </z-form>
    <button @click="submit">提交</button>
    <button @click="reset">重置</button>

    <router-view></router-view>
  </div>
</template>
<script>
import zForm from '@/components/form/form'
import zFormItem from '@/components/form/form-item'
import zInput from '@/components/input/input'
import zCheckboxGroup from '@/components/checkbox/checkbox-group'
import zCheckbox from '@/components/checkbox/checkbox'

export default {
  name: 'App',
  components: {
    zForm,
    zFormItem,
    zInput,
    zCheckboxGroup,
    zCheckbox
  },
  data () {
    return {
      users: [],
      formValidate: {
        name: '',
        mail: '',
        xy: false,
        hobby: []
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        xy: [
          { required: true, type: 'enum', enum: [true], message: '必须同意用户协议', trigger: 'change' }
        ],
        hobby: [
          { required: true, type: 'array', message: '至少选择一个爱好', trigger: 'change' }
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
  },
  mounted () {

  }
}
</script>
<style></style>
