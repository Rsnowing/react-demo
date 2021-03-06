import React from 'react'
import Header from './header'
import Menu from './menu'
import '../css/reset.css'
import '../css/common.css'



export default function Frame(props) {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <div id="main">
        {props.children}
      </div>
    </div>
  )
}