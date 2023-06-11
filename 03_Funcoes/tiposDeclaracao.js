console.log(soma(3, 4))  // Funciona declarando antes da função(function expression)

// function declaration  
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))   // Só funciona depois de declarado

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))   // Só funciona depois de declarado

div = (x, y) => x / y
console.log(div(3, 4))