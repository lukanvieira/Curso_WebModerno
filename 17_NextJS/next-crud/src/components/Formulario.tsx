import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const name = props.cliente?.nome
    const age = props.cliente?.idade

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    texto="Código" valor={id} className="mb-4" somenteLeitura />
            ) : false}
            <Entrada
                texto="Nome" valor={name} className="mb-4" valorMudou={setNome} />
            <Entrada
                texto="Idade" valor={age} tipo="number" valorMudou={setIdade} />
            <div className="flex justify-end mt-7">
                <Botao color="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao color="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}