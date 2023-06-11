// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}  Não se deve tentar alterar o endereço de uma const.
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Congela o objeto para não ser mais alterado

pessoa.nome = 'Maria' 
pessoa.endereco = 'Rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
pessoaConstante.idade = 25
console.log(pessoaConstante)