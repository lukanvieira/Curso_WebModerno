console.log(this === global)
console.log(this === module)          // this é um objeto que é a referencia de module.exports

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()