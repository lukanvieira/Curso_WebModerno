const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const converterJSON = indice => indice = JSON.parse(indice)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(converterJSON).map(apenasPreco)
console.log(resultado)