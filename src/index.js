/** @jsx MyReact.createElement */
import MyReact from './react'

const element = (
  <div id="foo">
    <a>bar</a>
    <b/>
  </div>
)

const container = document.getElementById('root')

MyReact.render(element, container)
