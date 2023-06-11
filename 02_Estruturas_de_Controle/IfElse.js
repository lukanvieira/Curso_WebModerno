const imprimirResultado =  function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    } else {
        console.log('Repovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')  // Cuidado!!!