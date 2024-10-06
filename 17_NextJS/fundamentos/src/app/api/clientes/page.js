// Não funcionou

import { NextResponse } from "next/server";

export default function cliente(req, res) {

    if (req.method === "GET") {
        handlerGet(req, res)
    } //else {
    //     return
    // }

    function handlerGet(req, res) {
        const data = JSON.parse({
            id: 3,
            nome: 'Maria',
            idade: 33,
            email: 'maria@xcfmail.com'
        })

        return JSON.stringify(data)
    }
}