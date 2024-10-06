// Next.js API route support: http://nextjs.org/docs/api-routes/introdu...
// Não funcionou

import { NextResponse } from "next/server";

export default function handler(req, res) {
   const data = NextResponse.json({
        name: 'Teste API',
        metodo: req.method,
        params: JSON.stringify(req.query)
    },
        { status: 200 })

    return data.toString()
}