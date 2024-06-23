import React from 'react'
import ReactDOM from 'react-dom'

const elemento = <h1>React</h1>
// render foi substituído por createRoot no React 18.
ReactDOM.render(elemento, document.getElementById('root'))