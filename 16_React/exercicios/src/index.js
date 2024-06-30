import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import BomDia from './components/BomDia'
import Multi, { BoaNoite } from './components/Multiplos'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <div>
        <BomDia nome="Guilherme" />
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
)

// render foi substituído por createRoot no React 18.
// ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))