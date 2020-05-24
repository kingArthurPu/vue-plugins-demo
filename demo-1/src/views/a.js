export default{
  data(){
    return{
      componentName:'a.vue'
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    show(){
      console.log(this.componentName)
    }
  },
}