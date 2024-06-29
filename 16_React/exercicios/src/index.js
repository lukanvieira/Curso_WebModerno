import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import BomDia from './components/BomDia'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<BomDia nome="Guilherme"/>)

// render foi substituído por createRoot no React 18.
// ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))