console.log(typeof Object)

class Produto {}
console.log(typeof Produto + "\n")

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 5, 6, 8, 4)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
     return a + b
}

console.log('\n' + soma(2, 3))
console.log(soma(2))
console.log(soma() + '\n')

// Armazenando uma função em uma variável
const printSoma = function(c, d){
    console.log(c + d)
} 

printSoma(2, 4)

// Armazenando uma função arrow em uma variável
const plus = (a, b) => {
    return a + b
}

console.log(plus(2, 4))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
console.log("Legal!")