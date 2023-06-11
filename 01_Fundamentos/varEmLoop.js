// Var em loop
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log("i =", i, "\n") 

// Let em loop
for (let c=0; c<10; c++){
    console.log(c)
}
// console.log(c) A variável 'c' não está visível por ser do tipo let.

// Var em loop 02
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

// Let em loop 02
const funcs2 = []

for(let i = 0; i < 10; i++){
    funcs2.push(function(){
        console.log(i)
    })
}
funcs2[2]()
funcs2[8]()