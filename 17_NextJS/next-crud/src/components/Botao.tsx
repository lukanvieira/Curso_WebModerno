interface botaoProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: botaoProps) {
    const cor = `bg-gradient-to-r from-${props.color}-400 to-${props.color}-700`

    return (
        <button className={`
            text-white px-4 py-2 rounded-md
            ${props.className} ${cor}`}>
            {props.children}
        </button>
    )
}