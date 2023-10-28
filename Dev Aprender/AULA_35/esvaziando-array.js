// ESVAZIANDO UM ARRAY
let numeros = [1,2,3,4,5,6]
let outros = numeros

// SOLUÇÃO 1 -- SO APAGA REFERENCIA INICIAL
numeros = []
console.log(outros)

// SOLUÇÃO 2 -- APAGA TODAS AS REFERENCIAS
numeros.length = 0
console.log(outros)

// SOLUÇÃO 3 -- APAGA TODAS AS REFERENCIAS
numeros.splice(0, numeros.length)
console.log(outros)

// SOLUÇÃO 4 -- APAGA TODAS AS REFERENCIAS
while (numeros.length > 0){
    numeros.pop()
}
console.log(outros)