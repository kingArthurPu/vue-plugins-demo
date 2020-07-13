<template>
  <div>
    <vinput v-model="count"></vinput>
    <vradio name='sex' label="男"  v-model="value">男</vradio>
    <vradio name='sex' label="女" v-model="value">女</vradio>
    {{value}}

    <vvinput v-model="uname" />

    <zbutton tag="a"  to="https://www.baidu.com"  target="_blank">按钮</zbutton>
  </div>
</template>
<script>
import vinput from '../components/vmodel/input'
import vradio from '../components/vmodel/radio'

import vvinput from '@/components/vmodel/v-input'

import zbutton from '@/components/zbutton/zbutton'
export default {
  name: 'Demo',
  components: {
    vinput,
    vradio,
    vvinput,
    zbutton
  },
  data () {
    return {
      count: 0,
      value: '男',
      uname: 'zs'
    }
  },
  methods: {

  },
  watch: {
    uname () {
      console.log(this.uname)
    }
  }
}
</script>
