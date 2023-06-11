function teste1(num){
    if(num > 7)        // Quando não usa chaves []
    console.log(num)   // só a proxima sentença é válida
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {       // Cuidado com ';', não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)