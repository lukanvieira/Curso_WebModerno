export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"uma extensão para a sintaxe de JS".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}
            {JSON.stringify({nome: 'João'})}
        </div>
    )
}