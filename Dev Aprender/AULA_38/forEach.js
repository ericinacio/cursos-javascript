// INTERANDO ARRAY (forEach)
const numeros = [1,2,3,4,5,6]

// forEach
numeros.forEach(function(numero){
    console.log(numero)
})

numeros.forEach((numero,indice) => console.log(numero,indice))