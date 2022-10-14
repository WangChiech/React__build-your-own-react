function render (vDOM, container) {
  console.log('---render---', vDOM, container)
  const dom = vDOM.type === 'TEXT ELEMENT'
    ? document.createTextNode(vDOM.props.nodeValue)
    : document.createElement(vDOM.type)
  vDOM.props.children.forEach(child => {
    render(child, dom)
  })
  const domKeys = Object.keys(vDOM.props)
  domKeys.forEach(propName => {
    if (propName !== 'children') {
      dom[propName] = vDOM.props[propName]
    }
  })
  container.appendChild(dom)
}

export default render
