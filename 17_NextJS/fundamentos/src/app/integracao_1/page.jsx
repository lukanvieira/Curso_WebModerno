"use client";
// não funcionou
import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    async function obterCliente() {
        const resp = await fetch('http://localhost:3000/api/clientes')
        const dados = await resp.json()
        setCliente(dados)

        // fetch('http://localhost:3000/api/clientes')
        //     .then(resp => resp.json())
        //     .then(dados => setCliente(dados))
    }

    return (
        <Layout titulo="Integração com API #01">
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.Email}</li>
            </ul>
        </Layout>
    )
}