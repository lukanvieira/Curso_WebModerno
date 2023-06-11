{
    {
        {
            var sera = 'Será!'
            console.log(sera) 
        }
    }
}
console.log(sera)  // Variável var fica visível fora de um bloco de código

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) // Variável dentro de uma função só é visível dentro da função

var numero = 1
{
    var numero = 2
    console.log('\ndentro =', numero)
}
console.log('fora =', numero)

// Usando let
let number = 1 
{
    let number = 2
    console.log('\ndentro =', number)
}
console.log('fora =', number) 