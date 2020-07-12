export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render (h, cxt) {
    const params = {
      row: cxt.props.row,
      column: cxt.props.column,
      index: cxt.props.index
    }
    return cxt.props.render(h, params)
  }
}
