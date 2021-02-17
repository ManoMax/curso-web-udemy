import React, { Fragment } from 'react'

// É bem melhor usar um Div ou Fragment!

// Por convenção, os atributos são chamados como 'props'
export default props =>
    // <div>
    // Para não precisar usar uma Div:
    <Fragment>
        <h1>Bom dia {props.nome} com {props.idade} anos!</h1>
        <h2>Até breve!</h2>
    </Fragment>
    // </div>

// Possibilidade 2:

// export default props => [
//     <h1>Bom dia {props.nome} com {props.idade} anos!</h1>,
//     <h2>Até breve!</h2>
// ]

// Mas, para não gerar erro na DOM:

// export default props => [
//     <h1 key="h1">Bom dia {props.nome} com {props.idade} anos!</h1>,
//     <h2 key="h2">Até breve!</h2>
// ]

// Mas é bem melhor usar um Div ou Fragment.