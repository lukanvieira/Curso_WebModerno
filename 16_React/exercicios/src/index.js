import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

import BomDia from './components/BomDia'
import Multi, { BoaNoite } from './components/Multiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
    <div>
        <BomDia nome="Guilherme" />
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
        <Saudacao tipo="Bom dia" nome="João" />
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
        </Pai>
    </div>
)

// render foi substituído por createRoot no React 18.
// ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))