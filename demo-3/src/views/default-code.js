const code =
`<template>
    <div class="container">
        <input v-model="message">
        {{ message }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: '这是模板'
            }
        }
    }
</script>
<style scoped>
    div.container{
      color:red;
    }
</style>
`

export default code
