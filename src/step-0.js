/** @jsx MyReact.createElement */
import MyReact from './react'
const element = {
  type: 'h1',
  props: {
    title: 'title-h',
    children: 'Hello'
  }
}

console.log(<span title="foo">Hello{1== '1' ? <div>1</div> : ''}</span>)
const container = document.getElementById('root')

const node = document.createElement(element.type)
node['title'] = element.props.title

const text = document.createTextNode(element.props.children)

node.appendChild(text)
container.appendChild(node)