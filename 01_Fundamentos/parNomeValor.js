// par nome/valor
const saudacao = 'Opa'        // Contexto léxico 1

function exec() {
    const saudacao = 'Fala'   // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua',
        numero: 40
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)