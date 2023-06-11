const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caros = produto => produto.preco >= 500
const frageis = produto => produto.fragil == true
const carosEFrageis = produtos.filter(caros).filter(frageis)
console.log(carosEFrageis)

/*
const produtosCaros = produtos.filter(caros)
const produtosFrageis = produtos.filter(frageis)
console.log(produtos.filter(function(p) {
    return false
}))
*/