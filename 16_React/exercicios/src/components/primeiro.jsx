import React from "react"

// Funcionou sem import de 'React'
export default () => <h1>Primeiro</h1>

// Recomendado atribuir arrow function a uma variável antes de exportar como module default
// const first = () => <h1>Primeiro</h1>
// export default first