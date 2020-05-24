<template>
  <div id="app">
    App.vue
    <div id="nav">
      {{name}}
    </div>
    <router-view username='这是父组件传递的值'/>
  </div>
</template>
<script>
export default {
  name:'App',
  provide(){
    return{
      app:this
    }
  },
  data() {
    return {
      name:'zhangsan'
    }
  },
}
</script>
<style>

</style>
