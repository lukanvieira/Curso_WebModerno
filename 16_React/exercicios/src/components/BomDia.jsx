import React, { Fragment } from "react";

export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até Breve</h2>
]

// export default props =>
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </Fragment>

// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </div>