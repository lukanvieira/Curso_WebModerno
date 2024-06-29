import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './components/BomDia'

// render foi substituído por createRoot no React 18.
ReactDOM.render(<BomDia nome="Guilherme" />, document.getElementById('root'))