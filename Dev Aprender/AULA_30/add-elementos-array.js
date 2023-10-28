// ADICIONANDO ELEMENTOS NA ARRAY
const numeros = [1,2,3]

// INSERINDO NO INICIO
numeros.unshift(0)
console.log(numeros)

// INSERINDO NO MEIO
numeros.splice(1,0,'a') // índice,deletar,adicionar
console.log(numeros)

// INSERINDO NO FINAL
numeros.push(5)
console.log(numeros)