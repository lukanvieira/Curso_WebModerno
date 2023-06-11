console.log("Sentança de código\n")

// Javascript é uma linguagem de tipagem fraca.

let qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.14156
console.log("\n" + qualquer)
console.log(typeof qualquer + "\n")

// Evitar nomes genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto químico perigoso... kkk

// Number
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Alguns cuidados

const t = 10
const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("\n" + media.toFixed(2))  // ".toFixed()" limita o número de casas decimais 
console.log(media.toString(2))        // ".toString()" converte o numero para a base escolhida entre os parênteses
console.log(typeof media)
console.log(t.toString(16))
console.log(typeof Number + "\n")

// Math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)  // Pow = Power ou Potência. Raio elevado a 2 neste caso.
const teste = Math.pow(2, 3)              // 2 elevado a 3.

console.log(area)
console.log(typeof Math)
console.log(teste + "\n")

// Strings 

const escola = "Cod3r"

console.log(escola.charCodeAt(3))  
console.log(escola.indexOf('r'))
console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.substring(2))
console.log(escola.substring(0, 3))
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))

// Template String

const nome = 'Rebeca'                      // Usa-se craze para concatenar todo o texto.
const outro = `Olá ${nome}!`
const concatenacao = 'Olá ' + nome + '!'
const template = `
      Olá
      ${nome}!`

console.log(concatenacao, template)
console.log(`${outro} Bem vinda!`)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)