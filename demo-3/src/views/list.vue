<template>
  <div>
    <list  :list="users">
      <!-- <template slot-scope="slotScopes">
        <h1>{{slotScopes.item.name}}</h1>
        <h2>{{slotScopes.item.age}}</h2>
      </template> -->
      <!-- 解构 -->
      <template slot-scope="{ item }">
        <h1>{{item.name}}</h1>
        <h3>{{item.age}}</h3>
      </template>
    </list>
  </div>
</template>
<script>
import List from '@/components/slot/list-slot'
export default {
  components: {
    List
  },
  data () {
    return {
      users: [
        { id: 1, name: 'zs', age: 10 },
        { id: 2, name: 'lisi', age: 20 },
        { id: 3, name: 'ww', age: 19 }
      ]
    }
  }
}
</script>
