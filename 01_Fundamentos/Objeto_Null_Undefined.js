// Objeto
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40  // Evitar atributos com espaço.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90  
}

console.log(`${prod2} \n`) 

// Null & Undefined
let valor                // Não iniciada
console.log(valor)
valor = null             // Ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto.preco)
console.log(produto)
delete produto.preco       // Tira atributo de uma váriavel
console.log(produto)

produto.preco = null       // Sem preco
console.log(!!produto.preco)
console.log(produto)