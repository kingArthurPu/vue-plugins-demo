<template>
  <div>
    <table-render ref="table" :columns="columns" :data="data">
      <template slot-scope="{row,index}" slot="name">
        <input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{row,index}" slot="operation">
        <div v-if="editIndex===index">
          <button @click="handleSave(index)">保存</button>
          <button @click="editIndex = -1">取消</button>
        </div>
        <div v-else>
          <button @click="handleEdit(row, index)">编辑</button>
        </div>
      </template>
    </table-render>
  </div>
</template>
<script>
import TableRender from '../components/table-slot3/table'
export default {
  name: 'Table',
  components: {
    TableRender
  },
  data () {
    return {
      editName: '', // 第一列输入框
      editAge: '', // 第二列输入框
      editBirthday: '', // 第三列输入框
      editAddress: '', // 第四列输入框
      editIndex: -1, // 当前聚焦的输入框的行数
      columns: [
        {
          title: '姓名',
          key: 'name',
          render: (h, { row, column, index }) => {
            return h('div', this.$refs.table.$scopedSlots.name({ row, column, index }))
          }
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '出生日期',
          key: 'birthday',
          render: (h, { row, column }) => {
            const date = new Date(parseInt(row.birthday))
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()

            const dateStr = `${year}-${month}-${day}`
            return h('span', {
              style: {
                color: 'red',
                'font-weight': 'bold'
              }
            }, dateStr)
          }
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作',
          slot: 'operation',
          render: (h, { row, column, index }) => {
            return h('div', this.$refs.table.$scopedSlots.operation({
              row, column, index
            }))
          }
        }
      ],
      data: []
    }
  },
  mounted () {
    this.data = [
      {
        name: '王小明',
        age: 18,
        birthday: '919526400000',
        address: '北京市朝阳区芍药居'
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '696096000000',
        address: '北京市海淀区西二旗'
      },
      {
        name: '李小红',
        age: 30,
        birthday: '563472000000',
        address: '上海市浦东新区世纪大道'
      },
      {
        name: '周小伟',
        age: 26,
        birthday: '687024000000',
        address: '深圳市南山区深南大道'
      }
    ]
  },
  methods: {
    handleSave (index) {
      this.data[index].name = this.editName
      this.data[index].age = this.editAge
      this.data[index].birthday = this.editBirthday
      this.data[index].address = this.editAddress
      this.editIndex = -1
    },
    handleEdit (row, index) {
      this.editName = row.name
      this.editAge = row.age
      this.editAddress = row.address
      this.editBirthday = row.birthday
      this.editIndex = index
    }
  }
}
</script>
