function createElement (type, props, ...children) {
  console.log('+++++++++++', type, props, children)
  const newChildren = children
    .filter(item => item != null && item !== false)
    .map(item => item instanceof Object ? item : createTextElement(item))
  return {
    type,
    props: {
      ...props,
      children: newChildren
    }
  }
}

function createTextElement (val) {
  return createElement(
    'TEXT ELEMENT',
    { nodeValue: val }
  )
}
export default createElement
