import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import IndexRoute from './router'
import Frame from '../src/common/components/frame'

export default function App() {
  return (
    <BrowserRouter>
      <Frame>
        <IndexRoute></IndexRoute>
      </Frame>
    </BrowserRouter>
  )
}