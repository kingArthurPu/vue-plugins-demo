export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    column: Object,
    index: Number
  },
  render (h, cxt) {
    return h('div', cxt.injections.tableRoot.$scopedSlots[cxt.props.column.slot]({
      row: cxt.props.row,
      column: cxt.props.column,
      index: cxt.props.index
    }))
  }
}
