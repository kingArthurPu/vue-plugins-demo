<template>
  <div>
    <vinput v-model="count"></vinput>
    <vradio name='sex' label="男"  v-model="value">男</vradio>
    <vradio name='sex' label="女" v-model="value">女</vradio>
    {{value}}
  </div>
</template>
<script>
import vinput from '../components/vmodel/input'
import vradio from '../components/vmodel/radio'
export default {
  name: 'Demo',
  components: {
    vinput,
    vradio
  },
  data () {
    return {
      count: 0,
      value: '男'
    }
  },
  methods: {

  }
}
</script>
