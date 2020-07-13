<template

          >
  <div ref>
    <h2>示例运行</h2>
    <hr>
    <div class="container">
      <div class="code">
       <div class="operation">
          <button class="run" @click="run">运行</button>
          <button class="run" @click="clear">清除</button>
       </div>
        <textarea class="template" v-model="template"></textarea>
        <textarea class="js"  v-model="js"></textarea>
        <textarea class="css"  v-model="css"></textarea>
      </div>
      <div class="result" >
        <div ref="result" id="result"></div>
      </div>
    </div>
  </div>
</template>

<script>

// <button class="run" @click="run">运行</button>
/**
 *
{
  methods:{
    run(){
      console.log('hello');
            this.wAlert = this.$Alert.info({
        content: '这是测试',
        duration: 0
      })
      setTimeout(() => {
        this.wAlert.clear()
      }, 2000)
    }
  }
}
 */
import Vue from 'vue'
export default {
  name: 'Display2',
  data () {
    return {
      template: '',
      js: '',
      css: '',
      component: null
    }
  },
  methods: {
    run () {
      let compileObject = {}
      if (this.js) {
        // eslint-disable-next-line no-new-func
        const js = new Function(`return ${this.js}`)
        compileObject = js()
      }
      // 处理js代码
      if (!this.template) return false

      console.log(this.template.match(/<template[^>]*>/))

      compileObject.template = this.template

      const Component = Vue.extend(compileObject)
      this.component = new Component().$mount()
      this.$refs.result.appendChild(this.component.$el)
    },
    clear () {
      console.log(this.component.$el)
      this.$refs.result.removeChild(this.component.$el)
      this.component.$destroy()
      this.component = null
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
  .result{
      border: 1px solid #999;
      width: 500px;
   }
   .code{
     display: flex;
     flex-direction: column;
     /* flex: 1; */
     width: 500px;
   }
   .code > textarea{
     /* fle */
     height: 200px;
   }
</style>
