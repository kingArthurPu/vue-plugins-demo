<template>
  <div id="app">

    <router-link  tag="button" to='/display'>display</router-link>
    <router-link  tag="button" to='/notice'>notice</router-link>
    <router-link  tag="button" to='/form'>form</router-link>
    <router-link tag="button" to='/tablerender'>tablerender</router-link>
    <router-link tag="button" to='/demo'>demo</router-link>
    <router-link tag="button" to='/list'>list</router-link>
    <router-link tag="button" to='/tableslot1'>table-slot-1</router-link>
    <router-link tag="button" to='/tableslot2'>table-slot-2</router-link>
    <router-link tag="button" to='/tableslot3'>table-slot-3</router-link>
    <router-link tag="button" to='/tree'>tree</router-link>

    <hr>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',

  data () {
    return {}
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style scoped>
button{
  margin: 10px;
}
</style>
