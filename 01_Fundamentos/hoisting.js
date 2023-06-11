// Hoisting = içamento
console.log('a =', a)  //  Ocorre quando se usa var antes de declarar,
var a = 2              // apesar de não ser feito.
console.log('a =', a)

//console.log('b =', b)// Variável do tipo let deve ser declarada antes de usar.
let b = 2
console.log('b =', b, '\n')

// Objeto 2
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}       // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())