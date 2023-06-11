let dobro = function(a) {
    return 2 * a
}

 dobro = (a) => {
    return 2 * a
 } 

dobro = a => 2 * a  // return implícito
console.log(dobro(Math.PI)) 

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'  // Forma padrão
ola = _ => 'Olá'   // possiu parâmetro
console.log(ola())