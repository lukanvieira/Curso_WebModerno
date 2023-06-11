// let e const
{
    var a = 2       // var não tem escopo de bloco.
    let b = 3       // let tem escopo de bloco. 
    console.log(b)  // não consigo acessar b fora do bloco.
    const c = 4
    console.log(c)  
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: age, nome } = { nome: 'ana', idade: 9 }
console.log(age, nome)