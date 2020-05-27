/**
 * 由一个组件，向上找到最近的指定组件
 * @param {*} context
 * @param {*} componentName
 */
function findComponentUpward (context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) {
      name = parent.$options.name
    }
    return parent
  }
}

export { findComponentUpward }

// 由一个组件，向上找到所有的指定组件
function findComponentsUpward (context, componentName) {
  const parents = []
  const parent = context.$parent
  if (parent) {
    if (parent.$options.name === componentName) {
      parents.push(parent)
    }
    return parents.concat(findComponentsUpward(parent, componentName))
  }
  return []
}

export { findComponentsUpward }

// 由一个组件，向下找到最近的指定组件
function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null
  if (childrens.length) {
    for (const child of childrens) {
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) {
          break
        }
      }
    }
  }
  return children
}

export { findComponentDownward }

// 由一个组件向下查找所有指定组件--1
// function findComponentsDownward (context, componentName) {
//   return context.$children.reduce((components, child) => {
//     if (child.$options.name === componentName) {
//       components.push(child)
//     }
//     const foundChilds = findComponentsDownward(child, componentName)
//     return components.concat(foundChilds)
//   }, [])
// }
// 由一个组件向下查找所有指定组件--2
function findComponentsDownward (context, componentName, components = []) {
  const children = context.$children
  if (!children.length) {
    return []
  }
  for (const child of children) {
    if (child.$options.name === componentName) {
      components.push(child)
    }
    findComponentsDownward(child, componentName, components)
  }
  return components
}
// 由一个组件向下查找所有指定组件--3
// function findComponentsDownward (context, componentName) {
//   const components = []
//   const children = context.$children
//   for (const child of children) {
//     if (child.$options.name === componentName) {
//       components.push(child)
//     }
//     if (child.$children.length) {
//       const res = findComponentsDownward(child, componentName)
//       if (res.length) components.push(res)
//     }
//   }
//   return components.flat()
// }

// function findComponentsDownward (context, componentName) {
//   const components = []
//   const children = context.$children
//   for (const child of children) {
//     if (child.$options.name === componentName) {
//       components.concat([child])
//     }
//     if (child.$children.length) {
//       const res = findComponentsDownward(child, componentName)
//       if (res.length) components.concat([res])
//     }
//   }
//   return components
// }

export { findComponentsDownward }

// 由一个组件，找到指定组件的兄弟组件
function findBrothersComponents (context, componentName, exceptMe = true) {
  console.log(context._uid)
  const res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  console.log(res)
  const index = res.findIndex(item => {
    console.log(item._uid)
    return item._uid === context._uid
  })
  console.log(index)
  if (exceptMe) res.splice(index, 1)
  return res
}
export { findBrothersComponents }
