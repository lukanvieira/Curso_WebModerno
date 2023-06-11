const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = p => p.pais == 'China'
const feminino = g => g.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
  //console.log(funcionarios)
    const chiMenSal = funcionarios
    .filter(chineses)
    .filter(feminino)
    .reduce(menorSalario)
    
    console.log(chiMenSal)  // Chinesa de menor salario
})